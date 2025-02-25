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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZBA7WC2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCmNQuoTIHtKdKKq7Ik1uGLZjoFc5v4WstDylkU7CGSFAIhAMAT%2BhvhhfuVxb1EJlu5PYfgxKBIzZNVJtZivJfR3%2FwtKv8DCEcQABoMNjM3NDIzMTgzODA1IgwKbDmJwhhUAydQRFoq3AOCdXfooiBVkrlRXZZRKalrEpL6S2gSSeUjznyQRFe5j5%2B2cc%2Bds9VCA2JVzYh1LzPtDoOl9gT0h%2FcR2onlU5uaOPyZT2hi1nyd0EoVLBeyjz4pLj9TRECnsYLmg9wTabDV0JVi%2B0b29RT4Udqez6KGTrGgTM3KnEmARBJ7dzB6kGE5Kdy9lxy%2BgDe8cG2dppa%2BWNTDl1vLr%2BEjuV4zWLjlMFensdEN5sRWGGHZ5Mk1hYJVgrLiwMZsOB5jcNGPmRvKIv9zJ%2FWJMcRmaUtNcM3Smqs0%2BA8yCpBtARMsGvHe2nfbWfjZTtraT71nzu1Rq0LlspiMXDmTdTJTH%2FsNwIo0d9fnBZFkHsP5Dyq%2FuVZ0NXPewetNmTkmg%2B2GYkiERUiDjHks%2FSbPWmses5I5wX3VzozjZIlaVXU5AFKQC%2BXjEWXZDsUmo6rbo%2BnKdmFoYLa36zGLcIEJt8Ddjd2HDxeEBZOJKAcSTd0Z8b0%2F9kNUXqyQ7KdfY3D2IxeinujmFR8Xp5BYHN4AkwtMePsxrRbFJNYYgI%2B72tbhui%2BIURupCIbe2zxR20m6ImbZu8g6HPJ7e07uQIkoYraGy1XvOhJ2UbQCsfNuinj%2FjmUmZ5QGcHnULfyPlDYT9SsTbDDDl%2Fe9BjqkAWEPm93%2FR5az7reGs6IVBTC6g8AtsEK83puzeqSNDYG6IuvcIK1JoHHW9EifuGOvvmkYKldLh1xeYSUtX3HmRKKvVo%2F6WB0KjCA2A%2Bh0w4cD1oimzVX7i687Zhdc%2F60Y0Dk3zs2oL8JpmFuGopewPgCPOzSbdmn%2BaqlTwXNS%2Fd9Xj4OxfUGQRQ8QCgCVUjvrqdcaSJ3w4RtmO%2BTo8QoGcCwLaDc0&X-Amz-Signature=4bd47b859ac92373a0c8b90ed09d07d13daf3eaf61f9a7ee0a697983fe76aa66&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
