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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W36EE43%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChLHUa%2F4A9U7ubqFPF3e4I%2BOwWHEZHCsC%2BayrkHs616wIhANygp83sDFyfsCrNi4P8EowY5JK5APnkHobNcovB5A%2BaKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw19xi7FnxbT14oE%2BUq3APw9Vax7SUB55yyWkfhKIWnB4%2BFqru3%2Fn8NAOfENpGjeyweC9NW4VyGzYMNJWx4MiIvNnuwNno11cbxzph5NSdrjGQbX1oZrMAAc5f00Hf1VwmdO3DqlH9mXa%2FiDH%2BtdPyQjHsgxYJc6ArcTtyZu44CFv3s8NcnLLGld5MTmBzJAexR%2BrvbHD02I7VHrWZMspG1wey7drV%2B4gNGvRkNWm7GK3%2Foe9o9hEw8gVvFhuK8EC5umQmFKNQrkshJkk360tPAPTZs2DtxUfsx746C1U2z2iVnjOal4efFe%2FlH%2Fd1Bxm1jcKdx60HajFHdR7oatQQWimjK3ZQ7Vcs1500S7hlrEFKVv9JoGoNR9HT5AYlhIFXWSoIHejQ81HPJMv8WvEAKDuVa%2BjnwFgqMKu%2FltX6atHWcpzwbSIBYOgfqo5iW3TDopzUDChMTs5FZphwjEuw4RRbtOBOwhSky88%2BiAZwVDMv%2BYRtV6%2BqIEJGiZTZwBsvj3mGDPyi%2FLhwUjRfLLh%2BOjMpXEdBzpJNY%2F9HlQ3F8%2BuIu2dVUQN5Y9awD8cxuXLr63LurI5VtwWVotNfZLvNYOq1jtokZehHgBottn0oImXXgjKRMDMosmhFvvbcdoN6jvHd%2BBPtkYKdo6jCkwJq%2BBjqkAZzZQSYNXVrky4g%2FsI1zTJA2wZwKCVAYsR7gmxwx6NWqhqO7dldRT7kBc%2FsWxeJSh8ifXcXCDxyaGtzMd6PcPxcq1ZvMpjkzZNd2xZZKa2K3Ntu2SQK%2FVdr07aPvA2vW3mT6In%2BFRYjY1iDJwzFaDzh6i6u%2Beb6TnP4bSx7FTom36xyCRzP0L7ZXZFlUNZ2v6u9T8NKSwYZt6O8AG1SEWta9%2FmhB&X-Amz-Signature=5310a3bd8568217120c1fa23bbb0ca50e3c441eb9e1cccdda8198aedc6e2bdd3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
