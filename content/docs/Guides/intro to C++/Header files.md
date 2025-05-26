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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTPPWVI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQChbqrK2RpT0DNnNXWtpHcV0zQkQ5Wf%2FjLS4AiiqiMX%2BgIhAMWa8KOcODVdWjrFm7flN92Z0kJZTnouQGxSyHJPOKpBKv8DCDsQABoMNjM3NDIzMTgzODA1IgypAMbouSaPny9aXxkq3APfMDYoql5%2FSwq0tcmvdRpCzzoK2ZufOrl5YWEpoggDqBBHTCs6b6aClqxKAwaLqtIcXYP98phYri29E1B4zRsRJwJv3DllhedzAZPHHUksji7uY0rq5IzcCkRR%2B%2BNnM42%2FVHUW56%2Fr7lkcKK%2Bqm5OuxClW19Smy0cd7C1tzUGFbmYjuUt7zSg5sSlRD1%2BReqoPyp5g9sWT6CN1FpjeiKeZ063NzRaspgj6uP%2Fq73UjEPLBYK2uCKNS95l365HqnPFd%2FQH84gFArx4HZkee1kGrwBEEe9MayzUCAexDZ4WzUFS4APWGidIzbBC7%2FaDq%2FDChGmdkylDBiQ3bcwrbXEb%2FKn%2BMnwO6ISSp5%2Fu%2FClVw%2FbpAos0Zo1dJf9EHH45cVbhlIbFVuXLcD9UAV20juNetFxqV7o5duSkUW%2FQgF5TkTjOGgsakpjezVXTMxTjqE4a4e%2FcvhweEsfD%2Fe6LdVmiwvMwLoEYAppdiOjQ7nUZFyVFuPPYiqvUQ11MGAyVdgbbBALnfymOIemTcoMOMEVOw1PC8MCwGXh5pcE9Z9ET7z8l0K9jg%2FW6fQnnzLqDrBBWKYbidTpJIsdQRsjiXhPtq02XR9igbaTU%2FUql3jN9afM10mwrg07T9dBNNGzDrns%2FBBjqkAXZ2W4uPiewbqErxuR1C9f6qxXjF1%2BXp9uwD%2FSAwpzDQ9wJv5ueCXWXkEnF2cOuJDoNErkDjuZAq4LkXWRWZ7i%2BwLSZJi1eR1DCZCMwrKG8glTkoin0uypsoYlNEomvxYiKq9aTS%2BpkF69bvFS3Ka4cRy1USSLdXW84DKJ7S8we2HrOtYWwRk3D2GI0ro8FebnT4U9m77R18wf4ImvCN3kfCM9Ts&X-Amz-Signature=997f90371e46821785a46f68817d9819c3a24f7ee8d7f6a3e23398b996c136e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
