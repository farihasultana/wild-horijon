const response = await fetch("https:/example.com.post",{
    method: "POST",
    body: JSON.stringify({name: "tom_1" }),
    headers: {
        "content-Type": "application/json",
    }
})