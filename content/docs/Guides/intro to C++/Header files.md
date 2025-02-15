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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFCD6RXY%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIB62LyG63PH6PR2IwhQ0dix6Zgl7eN30MUqagIuifKu4AiEAr5cFIXTVtyBlFo0cpcZ82pK%2Bq5XySGODX5RiSSX3AgAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMa43XvJxk1N6tFIECrcA3xbB8NkHMU7t47NbFYJW4%2FHiNy7WPXj%2FMgDedrlGdkk6OE1Ia5G3lHP9W%2Fu9H8Yz7P3t7pye04%2FooG9NeLn2E6450XzQ2HE8SrOp%2BNe6gphYfeWywpcRJVpExOyuGp9be6T%2Fbh6qZ74eE8tHRf9t7DLgZWgMLgmIKjsv7mX%2FiNzoSasfzSxq7r9CxeRtmSzo%2FIXbHL4LcmRo4lFY2ylBXbGVhCy9HLJXEmox3FqyrL08kU7tPg1HfbjbAlihYAMm29CfXgQiiW%2BJfeycWp435il3d6ITPpafL7vfMdd92IqnASKXZVmfRGtpsUaAZRAWpLl7L4DzYtfoub3h2zHTcwLxZPrDx6eAUjpIhSkJhRQgiDZaNW14po4wmUXBvVmQpIW9Cf0clExmDSrnnvMd3rz%2Bc%2B0y0m8qi6etGzuK9OVDaoIfA29StOvx9lW1U44TRurBwGUR8qUGGb2MvahP%2FUbM1l0IToz%2F0TdUH%2BW0VAQUnX%2Fp%2BM8arXog5AN2mDV7gHuf4xWC%2BPj10e2GC5EaCxGoPlhdrPamXlDxeOOeLmUGn79EowaTRX%2FrcPLAw8vDGe%2BjNEFWIbnzhcMIO8OooqfpzQ2e6XjTfqgUjNlDbAIsZAFNPQqDkavPizdMJqcw70GOqUB%2Fybt921GHH6mmn5k8YUf0wKQZCFnou1fEjlZOgybr5q9l3N18DZEK7lLLqFT%2BkQ%2B83UeGj5URXDQwf31%2FMwzEW8aGwxH%2FBsRChxTxSRYLx2EYUgxGg%2BdzlUmt%2Fg%2B5aouXl4rs4s8YzKIg7jRc7H3hXaNxMMYUGnSE3r4zmALWgfET5O814fqzXPk%2BL492SiFKzip7iz0Ryeggqh2HG2%2FztHli3FS&X-Amz-Signature=1a7a55a1f0584d24ed9342c519f549b95c2410651b8bf20ef72b0f548784f0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
