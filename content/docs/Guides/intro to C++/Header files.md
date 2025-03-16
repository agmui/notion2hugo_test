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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU36E6DC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9sRTALV3l437bsklJKrTyKFLLUl4J0V75TxRvDmcVjwIhAJ3m8H6a454e0UmNYiQyhQgp7dI3IpVmtcRU1zXCQCWmKv8DCCUQABoMNjM3NDIzMTgzODA1IgzepzmZ%2FSO2jGYhO2cq3ANHSeOf4jDQg449IswLiYQVrwrqQK1ub8Y7rtkSvOU2wgKU%2FI0VCiOyhuzBNOnNDtaPpUV5luAWmA1DLE41uE9e0mzhz4YTko6N8OHog31I3xDh%2FjPZrNXbfrMFkMX251TvXayA3c9tsiJXDvZAWMHzRD9QwT1ZzMyT8%2FMk26FsBxhAK4s1%2B7kdjCJymGh87CNQgsd1KnwjkJXSvEvMug0PLJQ9JksLZSy1gtzp6ESIeST1w3e74ESExAFN7Dq8yLEEbjluZz6%2Fgx%2BIT7QSmZFS8Dsbd64V3TDFWmz0iJKGKkAKtrT%2Fd93poL%2FoiYycWWvHaPhe4UMTcdVWW%2BxzmLVUjnW1Q1nRmQXJWnVqV%2FGxYGruGxttiMSVYi2BOg4MTREGyESTgeQpQnhHFVnPbVI%2FJX9dWXga3zKeKYHlwzG%2FO%2BY3aNWl1wUJ%2BnQ56bTO4DAT9we5F1ez6nspiQfPJoJN7zMTZH%2BpY3RHVIuY17FYwgd6v9zZ5jlP9kD1Si1Hix6q3Bx5MHkhU7y7AX%2BYnlpf%2BtJFPrFUCNaWEiZFUiw6ThZschvo1mCXEi9L5X5elZjIGC7hc88koTG2vgJ8prsu08lH9BKZh2%2BTsxGLGYXWHQK0f1wOaztWl0l7%2BzC6lNm%2BBjqkAfAxdEwKwV4oFfg2gDsV2kZkX%2BBAtfLWzlXLaY6Al2SytzlZirI5XsodhZdF2wfGTNtnpR8g3pu%2FBRRhBBHfZdWtSZiMtie5wyWtMD%2BqS9by3WgytEFsRBm3HdrqsxU2AxI%2FLZM66%2FSBH3ab%2FtimSC4VkUrsFSGX6L5Gh5AlrckUf%2Fl3CU4ISfj4RioUJMBcgaJ6bmks8oDReMERsPNuSGGSWQnL&X-Amz-Signature=6fc26ce7c122661d2b34f15fef032c577638be3b9b043009644c339c861ea389&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
