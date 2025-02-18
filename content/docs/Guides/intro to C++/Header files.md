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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLEZRI6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCYiGGHFm%2FRW2ZotbXsitm3calZlgQBcqzYfrUvlnJR%2BgIhAOCqWsR7rQ3YUQdfBVVUkbaempyM3E7vKpNJPrrHwklIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwhmfcQZliNE78xfkq3AM55E1tMNesdKI3NTeeExvI%2FrrXQvYhQwfAghEu04A0l15qDiY3bPbZtpTGp8Vk9%2BhsM8fPzxW6Iuhlz0TEqQLdv2w24%2FAyu6Bpq%2BnuhQfRllCWffVsiKtUCriL5Z%2BB5guXodb057D1%2F5%2FyrtdGrdfG%2F%2Bwt0y1CQIN95KG6fLEoVKzXql4cflB75NuaK1Jcdt71pau0kxqHjI%2FGiyWaWLeOiqbgi5JoWa6b76BauC%2FHWcszUSo79kh2B9gNrGsu5%2FUtai9cBFT9QGpYGeYH5Z3lU11gZkwMNgt0cXQ%2FfDJJQ%2Bbm2UYSl%2B3HdlS0IVdlpupfhJnb9E%2FG3vkcZsXjX%2FqvocZq%2B%2BBdwcilWgOCM2rvnPAAsjDpBVYYrs0JFOF7LiCBZ9B6RvZwEz5%2FVWqGjduieOcT1aLD8ELlMGp7VoKSWqvxwLrrZEpfzVNp%2BNcaBaXbK%2F%2FBBMymsd7r8MBOPd16Udn8e57ts1ta0JlgZy7ZMOuI2WErDWIGzMDR7zB5GnYNr58JPL6Ux%2BXb104cyCAQgRe2xS3GF6o8ydGKTRlRZL531V1U0yL8ESxtZORV1CXpC78XbLm2k6NFajiV%2BE8FtzUL31EtSOfVl8xqFHGxCra4x2KjeMNtIvYK8TCuv9G9BjqkAdYJsogHzT1syJwA2A2Tggf8UiT%2Bfb1K4K%2Bmax8GbTvYX4hV35cAk1%2BFQfTmtxQ6CS0s4RREW4qTTMhkoojarWLdB1TX7x2km9EtArwGjVaK%2FmwV03%2BVXPTv96Zmn9zig9yoFl8uZVUvwtzmgaW4FY%2FhaiyEvdDj7X%2B6jusUUMM29Zen%2B2jM%2FWOnIiQ8zGKYOYN55Xr%2BFqrYi8HMpKVazM5tauea&X-Amz-Signature=220a9186e743ea86daf4aee3e59de5da7169e5f1fb3f68593c284dbbc0d8dbe1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
