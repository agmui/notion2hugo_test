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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7CCEBLB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIF2Yo2daEuqR9Z6zJjZL%2B5%2FF4WMonNroT6dTgpaD05I4AiBAh44NGiv5Te9wEIyFd%2FXYpZKlVCfxx78mf7HcPXm3AyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM87N1T%2FlLdYmJUw6oKtwDKGksOGIgdS5UcsVgNR5OF3w%2Bo0q0VzWdraXL75K2T%2BK7ghBg14FvzaTX0GMH19wGPPTVKpfVaWjA%2FCIPsnek9vVXrV0TC8uLUiYx1pD3OKVI7bJ3gz%2FoejZloXoziC4%2FoOcCduVTF5TLFoOfuJ5NFxa33nQQPCXomomF%2BbYsGoQp77G237pIGdYY%2FmiQBhblJkCz3%2BnWbXmwxwrOFjMg1nj2pk%2Fke38BV2QwQWizmou0M3y54JLsVlSGfCNk0z2Om0LrQZUipw%2F%2BbHVSR3jTTnvHY6j9YcJXJ5qZEkU4oDIqQu%2B%2F91FCa%2BudrVfu9a5ukFuobXrZwhxy1tpqQgRYW3fSyTB5S2UxsttrDPxCswGu42nlTqsqLzZIQQBjLhPSHoxAGgHLSaU1vt7ye5csC8ygS1vL0ESuFzz0UjO0P1yDmu0brFZRrCVp25UhNn%2FRorvVQx2SxwPSOPqbG8pJJyaRP8gm2GtvBsnHPz9lrODeBoaKWUliZ6cVKMboO0q47hZqrNKg2LGz31EjhpiwM%2BJKWtvJAuTt%2BuLQRCoC8YGNpYXQQ7z%2BCyQdJ7NBeGu0Yq0IAFWCc0I%2FLXITSaRIKyvlFhg%2BGKhZpamDtFfP2wAzVIfB0giLsvToM4wwn4LxvwY6pgF06Rp9%2FiyDIcx3z%2B2%2BXUY5vjGURMXBAJ1iHhytzW6OmeBp4wb3tpuvekruTwrdP1crdktk9cZyFF1BAXFAwtSqjiUEiFN52qWPV3eGF4N3nM07WYEzs06Cr7v0VBXrfUxApflkYYO424xaZ5tg8kWx613I9u3yUGljWFczM%2F%2BzqX%2BwMS%2BWxgmVlm05Mz3CIen3BteCUZCmc02xbyAIu%2BvYbn2WQFUu&X-Amz-Signature=3fc0b83d893d863f2797e1f5c5a300981b09c4f3c02f5a4a844561d6fe241990&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
