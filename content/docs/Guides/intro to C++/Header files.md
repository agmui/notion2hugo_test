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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL32NRR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNuvJEOWSSZCkkPnA2OM63KTNQsaW81TwwVa%2Buqtj4CwIhAICn35lgicOEG%2BWNnNSMv%2F%2FgpLP1Fkr3QnRz3d4v4HNKKv8DCBoQABoMNjM3NDIzMTgzODA1IgwxhFFF1MqFGkDeXDoq3ANTmaTcBc4Abcjjn38DZri9nOXSBf3CGnrewRL4uULlghBNu%2BrcjMVUDwT3x%2F4ikMEqOkRpB7jvuOA%2FuFWUc6w7Yrazsy3qGnFnLCrU5xOdQ5rgOBBHQKTsoRsbxffYB3%2BAwttuqzsvFY9%2FML4uvdkNSAoVRfs78vfwjpjlqxb8XmoFzoVLH1dbSQCV0HyaNhFMQqXTKYxDDSel3pCZS6Eh6SeBwVSt51YVTw1nYjqPwWthexRcKdVHsvWR6PYfRiZ%2BgX0DNhj0o5QPHjqndWur%2B9ObF0ARXQeKsd%2BqkvRwVmPiYTM08ijxuEvm8DYpsiiyK2aCO1QXTzqKRjrsQH4M5YlZKrFR8aZeXxy4STDJDJbfXhUCXktXnP9s9TlqDIOXmc1L5sojpoqvoHM1uUjR6vTC%2FHGywaL989sM60Vny9iFvfsQohHZmPBy8eFQYdvjP7E11lTQxuiPxZWO9VKL176PhrH16LhIppzJV6r3SXdHk1bFo%2Fybro0Wqg3Iru8qcuLEokIPHsBRjwKLQymDw2nq8vCyI7ftr5gA1%2B0Fq5ISNGv%2B7%2BFPX%2FNbWEYto25h8c%2FT8pRLqfynNuh7QFt%2F60qs7sw3WPP5%2FBsCewDl58JQirwasDUKVpnpijDSg6K%2BBjqkAett44noS0rYoO%2FbRB%2B4JBsu6BOmkEMN7tRyi9l%2FqVacCBz76u7ta2UkTjfeJwV8jPhbgX5ONlvrzyk4At5%2FIDq7yyKfScn%2BPUzxv0JS%2BZnSKes3l%2BKapabcLxk%2FGvnZaff774Y%2B%2FTS4CLjyRj0uizhMBPJwN1myKjETU9ZbOn3ozsjRcoMZtbHRdK3acbd7RJE58ENg9dNfbqB1hhV4WmBCeJev&X-Amz-Signature=c0fe2cf260f32538b46f17d617aba7ce01c75aa0826496e525be16116087bdba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
