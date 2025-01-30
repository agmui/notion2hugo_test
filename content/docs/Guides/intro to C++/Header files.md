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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MSMSZ5Z%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICicR8I%2F%2F5rMsp%2Fh4qmju1wvBlRWhDz%2BtGMmrnYnxtAwAiAQqzzItfQv8l7riic40XSnTtA6e16eO4K1boECrCTCWiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMujC20iQjwPfjptxgKtwDKwr27NFnEBI6q4qAC7wBOfcCAdGFkSZ9MM%2FmmmPW5SsppJzzah7ZJ1howPxzOoDvXxGlkkDrpfArk9NxqNrTUfGksLizFaes%2BVhFZYsF0%2BvLCGrSkXEBvJPVxyuaz%2BO8rgUsAcVoWJ%2FxHccHcnLw4SZxrrIRXR13uKS8D6nS54KvL7mOdHLC7VxpJNzIFPfNpeu84BcESiw1m2OYVrAnQuYwKbb2Maa%2F0BpZEJUU7FaqI3ZNsLhYDFeQ%2B4HnOy1fenJRHGiCScatwxPw6W38bh5UqKFgkSHD54TwY%2BKIGpm0rf%2FzCskW4RmZLzgyZr%2FPr4o27IR8xwnFM6%2FJ0Q8SaDwv7IN%2BWHTz6jVYeeYHeVkl8FC0wBsgnynKQ904KFUon7YnXOb0a4vBW6sxVLXcY7pS9JHz2uuyamltKkWFu6geXG5QkMv8aKNCmhzvSP4lXBN%2BMbkLKJ7KqDJCw%2Fk%2BfHg%2F8puQrw6dU0BkGES56SpgfUL9ClDil6mHIMHRIpSdfjUG9RE0qdF9U60Ccte7dfhex%2BDXeVvVTQtYYjheG86IO%2FmHLqeQxDXmulGWjR3YL9Shf17Ob7i2Xae7%2Fz6CsDc9zxYjWwn%2Bm4FlAp0j3HXhGtP9ZAKZxjtReG8w2djuvAY6pgEy5tmEHS4zdScqnnshhNHK4%2F8mt1ij8TRdCs1Tm6z6TDddU877XmpR1O6jMl0ZMcpNX3chfqfY%2BKUmz4Ji2G46I%2FjGm9hxrJm9%2BWv64IlevDEEgBSHi8IhQlWOcnYN2IFraI04PYwhN8%2FDnnxSRKuzedFaLtQaTuZ09thvnoUWdyJu1EmHaJo71EqNqbFAt%2BdCVXhSh00xme4J9DsIpY4Y2Ob78K0i&X-Amz-Signature=890a19269c71d4f2ed5a570d485aef443e943db089f51dba3f4cec2fb6c93fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
