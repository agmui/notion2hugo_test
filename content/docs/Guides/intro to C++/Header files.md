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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RBFTNT5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUjYUMYkbnDhWH6SY4MvO8upQyU1wGI7%2BId3Tr3PCTAIhANZvtxp%2BdJ4QDi9GRVCSdc%2BiHZjvlp6Sz4ZllS92eNR0Kv8DCD0QABoMNjM3NDIzMTgzODA1Igz6cTS09tWncPQa2dwq3ANQtny0FJs8TXPIvJwdveb0ZA0TVd4QXMOL4oiCwsEAgfG09yJvf1Uhr22KSNvPByCTzu5SEi8LXLu%2FcQEaICANpMRFHhI2gPocci5SSDUGebmRWDydI2t%2FYAii1pMBEbukYB14wSQZegKsnpxojF0mclOrL26s7XuPezFNZ7EpmCbE53SHUO5wV3S8Che5bcYYdKaavmQGzfpqB2smjw%2FfQrzScER%2Bz7TFGSSgyMGE6HXx1hGMMRgWH4dEHkBs8OQ5AKn7qAZDM7eMAoZx%2FFHeiezuVrkr7ot%2Byq7M%2BXUY4o4J8iAtsxYmg3cws2tj98FLF16iqdW387L7qmn79Jkstb1o8gTcIXxiHte3D%2BlkA6n7%2BbZltseTyV%2BZ3ZdO7BlL6%2BP%2FJpDZ4MRqEYeodCqG0JkZACpD%2Fs7WTXFjxdK5Vx%2F6WmqY1tgDPLBNHUzTWOuMWQF2b1dtQ1oJPvj9g3T9FgOYw%2B3SYKxcr4Ed%2B1iOiGVgPTiznCmNu5zk7jEtA4rF9gidDZd4h2hzjAMxvlGj1S3AFI6QCJgD6vze87lnGnVV6wvlWeNLkVH2o09H8THo2OZTVyw7IXw8weC7V5Ag0HTxsfAcFUc5IXQjiDL0LKBAsgQHAJk9vjzKpDD91fy%2FBjqkAZp8T%2BpdkU2TtgUwnyvLb9xC53Y9RfXThwUq74QpaCkqJCkjHEcFYRnarqoUWGrnKJsEXEWMGkoSIYiNWGG5FGRXJrrhdLZSateByG8O6Q8DC30ZETqtuMDX5j7V8a95HEOGHA97%2BTTmIkrTrJyXNzH0gl7Px6jlow%2F0KaOSXCvxCMWjmCCkDHmhC8HU7Har2IR9Cbw%2BKwotfTVU8haOkeA2i8rP&X-Amz-Signature=c8b303f7bad2d949db0e9c0175c8859cfc321cba88e477e29f9a15dd638b2b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
