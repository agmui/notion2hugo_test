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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JCJ6LW%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FORxSR%2BMHXI8C0bwLjEUGHiBA01VqB5Wvf30J0w3ypAiBUByno%2BeE7z8MfxB6RERTSBKYODJ198p071XDYgkU%2FIyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNqu58XIGe4YofAGDKtwD8r1bQkvCaDFi6civUQo9i6RRUmrq6eHcYsgMmkx96%2FvHw9GNHDqyd3K3RPhO%2BVkwiJxNg%2F6DNCJ363jTkb%2Fb496BOJL0hfMK8IOLhvyoU06U6%2BXx0SjJC%2F%2BBdNFDOSoKOuplaiqyBlAu2KHiUeMZxpw1w8YNEX0IcufqDqCpL0lUlJVjwqFAvyPW%2Bcx0fR2%2FA77hVTnQ0AGvOi553Sp8kDAzoefiiyfnpGCrWhBAagZQlErVkb61%2BEZf65hNu8ET5iiZXMp9nkzBqgBd2IpKicFDQupmSlnlP16lb2lZm9J2P3ZKuAfn06G4feAyYUbxqO6B8obUpLo6BC1hA3P18%2BPP9I0AqNj7vtSpjXNpqw5XLzkJX2cBP8sPOlmhSC9A0ehDmhJVkDHbKN1NQYWkWxLHCLbq%2FCcsoAzjSPgjUecrKcPS66ovBmFCqSpwN5do4c0TD1lQFI2Ckno%2BfJr5eKzs0uno88P156ZHXdhPcLa2ClzNED7osWtkhTacxE%2Fa6ybzRx0Dlu5mBRfU5kiZE0tWVu%2BKdNd5nt7zf%2FsCsfLw2gkBXxzFAGiSTAvHA5W7Ps0pphDm9lGZxaSd1Br2fm60M78f32fl0o5a%2FRNu%2BDCPNVVXyjG7%2F%2F3ajUww0aTVwgY6pgHiSO9VU15O39BKGlvtITECa8N9Fl8tGVkebzJDZsbR6KIINth4YW42yzejw8gZwLyZzbjSX56JHKZa96Em8vwi3GwXf71mLvcubG9SIIFz3DJ04%2FK24FIoY4qnl8qatHB1VvwVyZIsdWz936NF9PaLW%2FR4QVkreRmxsisaSdA7VNP7nSl0CiwarRqp8KbhSFTdb3c1WGv%2F72Ub74HCgbVUTO%2BrrAGp&X-Amz-Signature=149890964da47a1aad387371937e330574554137cfa9c460b4ccec7e6a3df63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
