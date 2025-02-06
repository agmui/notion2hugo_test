---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEF6ZSJX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCG19sr32SuJ0usZh4is1vqw14tcEqHFl%2BX4NJ0NWEsMQIhAL6TqsEbGhcx4ZeH3PvaJOy4vwKrOh20H4HYoP648VKGKv8DCGIQABoMNjM3NDIzMTgzODA1Igyv5mH0tRXd%2B%2FCOfBUq3ANXuaUrVqlrDUFtt9R4oTvmLdEKIH%2FimnoA9KzkRImI0Twc%2BUyHZUs9g%2F513eVni32NRjKXjWkzxQx2t3n1cG74Lpjw3u1G9zmZvw85S57a6JuNd%2BgAQeKxqCn4m7hWWxonGSXEq9XcgodEQZqiIQ2b6v9Kd7hcZZrbXFt8oITvd0iCZ9sq3k%2FZn7yXRVvEGYm3FPcgauJF7EEQ2hL1KDLqSvatDSRsy6XA09yhqUDMxanvw2DUfOfstbl7baiNJd6ug4stq7%2FvnN7yjkg33imVof7z%2F2KZ5a97G0qEsQIg3h7aU9rd5EB5tifuX3r%2FoFmp%2BXlMlV30UR6p9Qtp114OA9ObBdCRL0GTkIicaDns4P6BdbtqsdERyEmoAqo6zOz1ClUpe6GfUmbtEcvVpC0HnyvQzvjZG5AxxgbeyxVCvNQI0nOw4S%2B1V1qwL%2BwUFSOHwwKqJ%2FcCDBVWv%2F3blqfQBf9UVOpaPWpqpTHYUYdi%2Fc24AQI8TwW3GDQIxcqztZeUPT7KqZa1XrcxTRMnB434lPR%2FysrKu9aG2AKf2h%2BuPioWByGBn8qdN65mbFSjsHHCjUOy8rf3%2BS%2Fooj9LWiph3%2BTgHqdiuiqVdaDobW%2FFn1%2BUjf%2B8t61sHdcjSTDf0pO9BjqkAQz0DLmdA0NITmJ156I7cONVsqfcla9FOOrB6HJrh2TpnD5JpyVwXgCwdL%2BPum2vh4rxOYx94KfHCK7hAAphnEOhmWgPLmz6aYyDri7SI2TlcAITf120APHH0jhvtHOpAsd15JDRH%2BnGPUIKavJSA67vq1fSkmHDuy3OlMrKyf3KfjJ8XgwnaGeXtxoVCSAggjxV0MT9SYIhIAxjpxLcdwcBobJC&X-Amz-Signature=d1c1ddb131e59bd232d5b9b0b44e5dcc4b49235db0ae06b5b3b736d426ff5924&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
