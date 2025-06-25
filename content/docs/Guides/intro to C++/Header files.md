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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJ7VVDW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCKY%2Bw0g%2BlsjMCwguE4NZ08AqPq2BbjP3PQNZxmFzNN1QIhAIuekvtoYPUdt7AeJAKONYm1NIeC7DDs7fGc4AcfkYKPKv8DCD0QABoMNjM3NDIzMTgzODA1IgyqaGsJXWjZzocWOT8q3APTMvdOHfAp1PlM9xpbfSkOVFOOgeax%2Bw1vxp71q5mBnz6SkJxnaV2pCTnjR2m89LpA%2BGVAsboPSze455DVkJo27Ioavjq9UpBmzBb43neZfjaPtWlYBXI0zi8uqOYV79Tc6R2rVckQV58bGlL59Qlr3YV%2BMv5jy%2FDj544ncn1%2B4OJlmvzRzYb2UzcPMS1ZmrFhxwTbQ2Oyf0GkfNWh8KGqbt5ZfJYmOFLCJjNEMNuRM6FxDwMT3pLDW4gyi4%2B5F1RJs0q6ResRzIZ3zybQl2ZmAUbieqWRtCOpy9DkOqwbNKvkr3isKT0Po%2Flx16zydJcipfA7wCtg7pF1U4rStpQD0iHFD7IG7oy4M79ffvrMPYTIo8WtoMyNNvXaFQf5cDJnoKvNJOa3igAiGLX27AaRtCMPfmjpJzQMzJsZjl05qKN%2BydrMr%2FbkjZGi%2B1MW1FN%2Fb5AJfJbHZ8OeNL8Vz1msSgdrKuR%2BIhfFWzgyW6UPepwHY6mw0qF3ZblJPFhu%2FkcGDunVOc%2BbJs6Mwlm%2BpMchv2vlKrCE1stO6KxxRGbGNv8PAxShFWE6eEyREg0B0J%2BcqQOQfV7UPR9c3uav4N0YiNbYmRui7H%2BdjbUJ7Pgvd1WxPGo7B3ZoHJ7%2B5DD%2B4e3CBjqkAXX%2BWEUJ7AbCR4XRcR0VKV5VMxf5V2Ldl6iuk93m1JrpBE67LN8N5zflIiTHq1LHWm2gh%2BoiXgH4wcW55V2kkqPvyz9BbKrCHn%2BID%2Fq4gsknMq%2BwqJ3E9hZSeZNulkEPNnGcFuVoZUQNLTG4T2H9ttkGqGBpmdTXHyq3p0HD%2Bo1DYlW4rDjATE2ak%2BBcCYVJas0gSy6q9FHSPFQtspKw8ygFtf4U&X-Amz-Signature=acbd17241a99b45e2c85a85575147e029698ec1970a1a12cc0aba97e8bd5adfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
