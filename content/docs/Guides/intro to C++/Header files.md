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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SREEAKSK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCpTKjWeKg3dRL39WSRZWvf%2B%2Ba2l9BsWjycqK1z1QKSTgIhALcC3Q%2FHHgkIbN3VD1ZSzNmihd6uAD8mldV6nNx%2FZccRKv8DCH8QABoMNjM3NDIzMTgzODA1IgzcMIBUL9imfcPxmywq3AMTO6PlGuNI%2BZa3gvUwas5zmpLmzh3h%2Fd7c45%2FaDs9yFb9UiONg1EurS7eyI%2BMYirbzsxasfearh9JiwXFzOIn9ob%2B9CfudtIL3EmfYbuwuc47gVZQerwcde%2ByHPTuuWxg2wCT%2BP5kAkHcYAV37O4lFTRoTQY1lr%2FpxOZ2dQC6eX7HJs9diLApZA0UHfSzoHlKiJT%2F4Ru8ZQCENjj8%2BxJ9YtsSxb3UW34y1aqryWYRJho6BBXIeldqqvyNfk76XS16jvGFM67aHbdapr5iXtAqv1r8wOC%2B48sU3rwcxB%2B2XwsmCP5ug5XWzwq6dGnFTgD8xWLYfXQ0LNxPodkR1lxiirSS46%2FJoQLn1xNNScVPsywJHHVIWms%2BvEns5YhSiuE%2FOmrmkwdSrnkZH76nekRjdli7lQv0TXnd1GcJqsYfKjNYNsR5ydTHAnYDaqEyUP2JqK9GKKw8aG8woAp2EogjHMDqk%2B1xG2xKzxfyD0pb%2BLOD%2FpBTp1GrecVHchB1mDBKQQ9GS3nIcN3DAc7XbDs%2FPjlUTmYs%2FIjO4rLPUC5Yyd4xItp%2B7%2BCl1JBERqyzFmwbn%2FmNS2hawvaawI0gUfQiPnc58IFNOWpxHjwaPy72XKf1jg1YXOj8O%2BMYI2DD7qda%2FBjqkAaJsfWAnusi5DUcbptzQ1zLeWufW9jO2tj%2BjrthgtCFAl5gJXFSRMTVbLvDMmXn80dZJTUpLeXkXBxNvrs%2Fy49sQnudRAyW41gSrE44mnct2eZI%2BIiozM6acmuS5mexTGPchVhSm5u0ksbARbftGdPZ4w1mxg6Qu4s6aDEE%2BKACbM2oFlrwfMmu7QmPfvbXCrYHdPabJTFJbYR3dfJ3W%2BJfFoWxi&X-Amz-Signature=bdb305763eea9cce93ca64af7d1a4ede1e52bcc57137b50dd77a81bb7617b151&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
