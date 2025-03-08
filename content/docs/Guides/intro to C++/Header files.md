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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTSNBIL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJxwaMCc0zgZXIlSb9ui8oPMjWv0oedjbV1kFV74GVmQIhAJJ1GkaDw9wqYa56cyk9GIRrnEC0AZVBYy9lQzBAlzpyKv8DCGAQABoMNjM3NDIzMTgzODA1IgxWa6flnVj6U2asJU8q3ANq%2FbUOET2ypiYIHhi%2BF5HMuQOuE8%2BzVNcDttlW9DsH0LfS%2FNKc2MbkZc7ANmpOIT9FDJYjbg7ctaAcpE6keJ8KWhsH%2Fe3Vjm0Iacmz7NnwHLixgszPdF1MAGq2CHQKOh8R6Z2JL7VcY9m1XO4ywYMEVZKhF7MurJhiOIotnUVoNz9o7OSU02ZpRAlpCh%2FeJsWmFqe5rrmfM1pkJw2IgegI7%2FJ3Or%2FvDHNKg1eZglu%2B5b97GRKGBbsJzAZ2CArV%2ByjA%2Bko5RpPdH3SEv1aBvYLmbo08e%2FZpy5%2FqqFGcEFon3XZKuMnMfh3%2FweRpY2gg6g2El%2BhWZN2ilivrs1GSN5rAOUMA%2Bbxg0hHMgHazTQVKAp%2F7dp62UW3lPUTQE8HCxI5PhmIdYz6LkQxHJxEN7%2FmwkSR3QEYw8toWIeBCH0M7CDzsUpEvTf6DIUVsjmsWxEVUvWp5M05ZPX3HDpwFCn4Nubfkje8NhquRwTTcT%2FeeNTb7avj2W79x4fUd0T2cQ%2Fd3bP6w4JnNCMtPTxqvc6YjTTt7DomCb%2BfRsJvG6wuvkMzQlAKG2huOnZjT%2B0BLtqNindkBuL6ckfDuF46h9zGxZY3NQxxvJz9dWxBxX2TsnaBhMb0LqLHCUKRT4jD0srG%2BBjqkARP1we1GS%2B%2FAMZRCJFiRv%2FA1lzFtoPAON3r9aw%2B29SfF2a8FT6t9je%2BRJN4hmfdKx2URdBh4tyYSuEVbJFvbrlFVtGxgGpMcZqMZfepn9nwVFAgw1pWfvubUqk6SrGBztGKKBPsYLRBSGlYHOXgvpiv9oWV2IP5eEBaMh0lTGwuNfYtbwMTTHpbwQgILf78x43tSUzRCMBmkV5z41eqenrv1Rq59&X-Amz-Signature=0d800055c8b69f26c1051d8e96e83bdca2e6341fe84342b0f98cceb86e270d22&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
