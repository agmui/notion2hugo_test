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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEF7OSL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWCIl%2Fbiz1oLXwsiaE1lcVIvDPbq%2FOJSPCzMkPW5vWEgIhAIbYm1KLDhwomM%2B%2FhisK9tYoUeowZEAcocdwYJbxTma0Kv8DCBMQABoMNjM3NDIzMTgzODA1IgxKj5qAnXb9sts1%2B2Eq3APCPMA3EMsrcgKP37aTL7B6TP2q4p0pzM9cuflp%2FxBfYYRLxXW7a%2FBVorn48ODTl7xPyelWw6yHqCcdiD%2Bo%2BxM9O7N6rfB2PzkzNrnJXFG4oXx4sBetBdSs5AHcXFXL%2FVw3M9XCtI6rebAS4LjSpf4Pc76tFFn7wK%2BlnpUZAFYwl29X5uyg9RC%2FVFQ98wPuULrDCmSbr0msLleugpG29GYFjMxLAfJJAD087qAyZzCMw2yeAkA61%2FFIc0w9UTUiDlEHom1MLh19gQK83kacI3%2F8X5Fp%2FCkOHfWT24RliuCKMJd7Y%2F4QQJxRW2F37w1n4MKu2QqIHmmFOvi2zaaDFhTHMr7wvNBk2XNHlCYHjlHe2sEhuHkQZuHcZVg8dmRhJlvGPV7FAyaAAqBElsld3QjRPQ0osfLEWXlh2k1NHLyjZD9D%2BO8%2Bqpb1%2Bz8zEtBvJvB%2FYB9WoNHd1J3KGDCS5mSisqdej7VPG%2F2%2BGR5kRSIS8%2FCDi6%2FCuJ8FPvuHlqsAazbmdP1sdZqaAUTcb0ddrUmVfZCk%2BTgBUC5aIKeffwlAVkd9zQCRENIcNoyT0n7%2FABxwSfYwzoIYi6cX96zrCu16FVidA3rjokuuBncCDD6Oq8eLOsGFoqjRcPfUJzDgh7e9BjqkAbIP%2B%2BntLPWbLY0rT0SERnEh3b5kVQa9KkzEKt8aKE9t4GG9ELPYeWZIOA670HlNkP3vQFUjD%2FneQyWUqNegt%2FWE%2FijPvUDQc0EZSq05J2U8KsAwTAAn9%2FUuxYBOqVZiWiEgxH8WUpikPAoGWo0kRrOUhcoqwMRqiuuxytzjN%2FfX9o1nzOJ5tfkYfMk%2Fss%2BR6sZa3IuyrHoibSt%2FuZq27rFjn8Ke&X-Amz-Signature=ebe4d680c74d61d636a60d16318b5c0384de16345c792b5b273fec3a7fffd44b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
