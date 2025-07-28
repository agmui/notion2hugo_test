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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHFEDCJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBAFI7tVS2gcsNCkkyXcuiQJ6xYipn3%2FBrBENDo%2BtvgNAiEAr9crU3%2BqQwpWzSgDNj9WqR1D6qajOLi%2BNEqTS9T3ANkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxsEgqPd9lCNfMOCyrcAyk12QtZiyksRhFrqdGeOW32C5p7XqnR6jua%2Fc3A5NPCwvXn%2BEN%2BCDXnN%2FzgVcWTWCPh%2Fq2%2BpY%2B0z0g27zgDS%2FHTv2tu7ERIkYkTHMh7bxk8Tj7OcofjjNnIfc%2BNUQ9mjijYmLum22SUFVuRuiWIJtA83z9nwlwuk4NR0FG%2FfGk3FvAONDXBHOzMIYsO7z5aWKe35Nau%2FTcBMRAc3zwZJLV5gBpaefIyOlbQTPgHvaDYAzRjnP6%2FT9IFgiiPwio0JEapoSzKEGY62C2SOv3c%2B33d66erZSs0qMqMLS97QGIh6bL5M1TM3Nf0nHFSEqQUBzXL3TlGUxfgGi7hcd7ePJVNM9nk9SgdV98UQejZmdhfDpTW%2FvbLsF6LJMnGx0mV4QrNhLWfebkAXDntGWuq9rHNVQAyBpI1rh56Ag6Yf81ud62gKIDG6vImK%2Fu3HRlqN0D5K9MZ%2B5BnhYpQdxbF3iTqkcbELP7oIAzJXwFK0cY17pugdOGbr9PFJKQpJL2M02Y1WfNvWaULp4QGDg9ytjwYwSyW2iNAbM71VM%2FUCX81lJd7EKb2lqmO%2BS2iTDfyTCvnO7ndtJhz4cNbPnYUrIpPHO9%2Bb2mFTIvy0ynhd6sqwweP7%2BBN845coDQyMNmKn8QGOqUBtGxEesJARUjXexVVgQzh0pZtlmTIjszBg5LcYsnWj9LOxnDWWNuhzFjjlAe6Wq9bS0I50sR8XfSsVDjYHP0Urp1veZYy5jjrkGHdCtr44bqv1PBPdT%2Bwmo3OnJhdBH6h9%2FZMrUPxSi%2FCqzifYJu1jF0zAO77%2BbC7nFzRjSe2eCeuXG7CMRMqGaldea5Qkw0DYexTh7%2FDGTPC7quht1osdw%2FoAxbT&X-Amz-Signature=95a2561551fce4ea890268e09e188eb5882cf0752c6638256533888ff1d6139f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
