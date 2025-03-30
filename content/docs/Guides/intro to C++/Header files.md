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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XFMUEK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDyVS6apmNBYC5ATD%2BUWBj1cvKiB8D%2FqaEsY0Bb2XwzhwIgROoyvJRnU%2FOyGp2haRwJMOHIRmERJFxNrc7udGXkIHoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKKztY2tBgEqK4bYyrcA%2Bpgr9qaLChjDCjS7UpKdFaTPnI034aZKJw8YpoBpK%2F6ig83krXby%2B9BRpv2DAkKVfg6oHzIutbjwavyBhS7mCFEeAPATl4GkK2QYxPi3u%2BuhRUDagrHtBeI36yKvarG%2FH%2FoT2aLyKtaQCDXG1oz7vbrAMz%2BQcFjj3uPfIABB2k2pdNlR1d6xSVoHmkjLVGVRHZCXIJ2L7kieaJjdBoEVcy4vWbTlCaWZ7JUMk3gG1UNAQlCKXpiHW8sVXG14lfDE8rsZTl6HsmkB5kkRJI270u8XEeXdjOGdpRcVOdXaDb%2F26vtSWpW870Uoi%2B0kYfwp2yGmThGJ54I07CE5N1cbpedShcV6QLCodVRXJraJRV2QhmsRFoxHXXx9OLQkGNFPPxRP9PbiTwfm4dyL%2B2uUHh3PUpTRu5dnBc6EzfYeG05pAj83spzqv5rZ40P4YIOOjB6iVzG1D%2FoQjQ4wZW2hHKj6BNpq3LUqybZVB1BAtpbiKuA9I30drTgMb36X31ayzARIXsF1N%2FZq%2FYuZvIq0bDy%2FAm7wYx5f3pLnYj23NIAvkGSYtEgAFCbXwo%2FSZAGaecbCVWdJDqUfkPXqOafsiTmgyNnvQB6uqpyKITUryxICJBXLuY3CQQTQHmwMLWJpL8GOqUBB2sQlDc%2FLkjP%2BMIwZ%2FZ2EhuMSNdmYpSYGCIZ1K4nzUQALPye3rrMxDnzP1xEzP49o6wy4arWxI5oJXXEOLYXLUZIO142pRvfwoUbVweP6pr2fenzD9CF6uMt%2Bu0fQvVrledwG7P2GlCBo%2FqaGPAYgFFfZKdQxwNkjy2TTChCl%2FvSkz1hSYi033XnT%2BNNVpbB6RzA6ALe7u030hqTwdY71IA26qrR&X-Amz-Signature=c907c858ce289a143f2a1d24287ce5988ba834136dcadd94af51884389431c98&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
