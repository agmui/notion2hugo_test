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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2NYPIA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIGrWrcmlMqhuH0Fyb3yl1Dcsoh0WrnBuBo1yLsNMs33YAiA2KRdYrY6pElzWlWYCYT2LZVPYZnd%2BKFhO2o9L3x3RXyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM6PMeCOlkbRU7E9ViKtwDjptKSB5pbB%2FTl%2B3mUOnaQIUvsmdm3Jyx4XT1G6mHqskUOPbMHzOj0%2FJjdgRQ2OR0TWg7S%2BkNm2ftY5pMooKnr4ClUrVVOpdraqVS9vs2WJ6FBXq1xN2tSw1e%2Bi2ZbZX8gbGtrNXaZZvyo%2B77CvXpyIpHxzjYH5fXm6D4a%2FCBpYWZADjIb9jHHk%2Fq%2FVm5cw8%2BB8SSTvjtasD1mqznqlGcHfc8IEc5LhnFLJcLGoAXQSFBQ42CosyaUofBsZuIbl4ehnRZEqiLmLvwRTqoUA2p6NF5cuLo05O03TgZB4Y1paOgfqCPR%2Fx8OHtDYksTBIJ7DEGYyuLlOTbsjfazhgPkFUDCDG1orSgLjEelbFCu5MaDG%2FMmqhJVaE9xJJlLq1JIYXSwVIBSlYGMsMScomAZBkLmYqvAB%2Fs2XsEUTcev8gAPdEdsYkCXqt0kac30ghsZoENifqsOd%2ByQ6JdC4DbOFBbjG8D1J0YRje7%2Bz8rgPq%2B0tYyqLCkBOG94vIBPnBSv4pdV9HDCuAcxAHAOpr7bVsCP7K11liAwYV5NsK38ngElNXr%2FiwvrADW04b8IrIMdMvVXvvaFRK9JHisFWbK7Lv2KZ4m5vxxwIi5%2Ffvt4dsSwjL8cpzMTAXlrDHcwt52KwgY6pgFYMiw%2BzS1P%2FDC6qiUQBFztfVeydTJpryem7EoZE6sSRwPeop69BjbembOU3zGN9DUM3D%2BAEJqkSxyOyAFA0DHKRANFQjvPswLXRm%2Fb5obTmMpxewQJL6og5TUPxL1wPObbwCZxae%2BuVQrn9yz1%2F2v6ZOtnvUxUbajfaB1tzOZyCy5OcU2WYIsvtJW3ZqO4Z5ONO7I5ObR6wxJwy4GMiNfHyIgFgUFy&X-Amz-Signature=7c4ec07f3add9e0a5f4982bc05c55602215f750533ae2b7ad0044658deb47d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
