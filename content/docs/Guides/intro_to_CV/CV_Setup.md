---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2KWZPT%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDsgPxg7Y22LIo6kM%2BZXJ4YrgY8IUMILX4xXWGmEGQjywIgGzmz6bs3hb%2F1CBu2zsSDazcB1f5RldJ%2BSYaiIrFnyd0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALJVxmnTYrFUgzdiyrcA1p3E8dTvHI65gFcr3oUEWQOchnm%2BZjKkDmVUn0qBr0vqIV3oY%2B2lOEpScmx0Nsb4juLC0LP%2BSURprxzAmAZ3euJU9Zs%2F%2FONh9ovanKr2Zi6zSunBuKgS3nQClL%2FFtfYYyAsx%2FhNfcQVHW5N66I9ZcpqrMG71tVwhmyUfMASkfFYPilaXDWpO1Ti4TQ2cf2Fl3JPPSBiJVWNqRpWimUOUrAmctDDEECSUEjcTMeOrjarybzfRHA2hDB4SKbvLVHEIIcBkPzWFFB8BdVLQVW28wIBxyXmPXB7VcFmSIK365zsdS8X58ilEQDXcbZRu4epSqYmCUPeIiy6GANYH9gOdhDzA8jzjX%2B1U2onf9HS35FBY3zC%2F84Rltcir9FgJGFj6RtrlnuJT%2Fdhr9xeTi3K7IKCz7H8XM8DdIJ4BaCAllBK57%2Fjtkve2QTIwZYTWaPksAymot%2BrNJVHjLPn8Zj0K5zw1MikXADA%2FcQocGBpq7A3%2FlMiPYTTQCS6XYSWFQwMldBWAuf9Mvqj9SwsdHBcRi66tSUmtwvtEvK%2B0%2BdzZzjSivlRiIVQz3Jq4sATJxujHJMRSV3l0GXOffTz%2FAG3CnIM2X2YIT%2BXEnwchpXAucfwvkK20ycyoXXiokP9MLuV678GOqUBQR8hB9d53EIQIbT57OzdyGI4APMl7srCKgKfM1iFkjwtEbj66mZdtDtvUXsxOsdpCjnJ6PaklF8ywiMfrmE0%2BWLpIFrhMZ8t9KA2txrUFyvQE3po2KMnN8fKMtJ56SsCusf3UZLqZ6TTRQBjJ%2BzNXYIQ2m4gQN5roj74YbqQ3uoU%2FTYbmSF82EeYuL0ZfPZiK9t3aZNOcO9Pcj9JHmtj%2FKyWkN9U&X-Amz-Signature=7de34997b6218083f715ce4d0f3a54c388f0cebb1ee281e0159564542ef626ec&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OFNWRZY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD%2F9PlWZjNSBWn3BiWkASZ1OLh5X2bhR76QOvQw1kgtGQIgV7dJUtgWLIcvLe14X1ukRcfHbCmdD6EYC%2BjeUmO6RnsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCX%2BaqWCa3OgFkGuircA096%2FBcbqZtbKbnig%2BhoMewuf64GHKTDO6qHHKbVs9hxzDEV3plKnLtQtRO3VGldz%2FAy3y33T7wy1L%2BznOtXNjnUyy5L6JgyOGY3mEFf6AkyapuyaFxoZARmZ%2Bt%2BfDMy5qswPNOkxpV5Xopoi9ienRqMmZ2SZXXIHHnDYC9135ePcm57n6mPpPvEd3fVwkyW3m5Pg8yG9c8Y%2BSz2TDohXh0hRG%2F63MtpbW2riI1KZSCFcpNv1mGYLbfhMbhDJ0Qfe%2FMulbqDvufrnRuj15gpkViKWfFXiwHoo%2Fcme6aFoTD3Mz%2FDBLYba8DgwA9xGniqeUmWiK5rwENfvk76zIAGHQEN8cHAnQnYPIo1G6Lp9lM69Yk7mbPCmnTF2hCxniIpQiGtJXf%2FH%2BbM7Ic1%2BnYxAPIWoFxstX6iDk8yvdh%2FDcMz02uErf2HiYnJDdhyVP4HSYhQ7yNO%2FA%2BONG8ZKMQ4AqYHqnii5pt9hFfLCMVjqyW1CMi5ezfoOdiLnOqjs1Fc%2F%2FFr7%2FehE5imRGtOuXgvlH1%2BQl3qr5HRTeYZrHAlBz8IccxIqaOu6CZ8ybMZkMwYrKqmN0pAR79i0L2NNyxyEAhQMxe8qOaLepMQUNPazZBWgApIXdqvZ57O1%2FwrMPqU678GOqUBZtI2AZnX%2B8moPwzDnQZ9shpvhBinsNAV%2FBkqf6%2BztdfpYr9Nr66UCWOyVwhv9c5U6LsWLuDk9%2F%2FONgTeHWZlMF%2FSQOH9Vw9%2BcOyLzmMmf6XNAmYA4A4Ch2SEO3qWkx8Oqi%2BkOr3g4MovHdJwh4Hp4WY7g5kpt4wmjEKLx00jP4FHs79UnUJKgL%2FshX0JZg6hlauupHQwQ0ipsrQZv2srJnBGprFv&X-Amz-Signature=1228244994d2eee1aaffbd401666f9dbf7fa4c530691595f191d1f964363c938&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
