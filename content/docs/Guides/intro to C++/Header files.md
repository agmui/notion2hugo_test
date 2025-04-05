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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYX7XYL4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYcIJ3BAhKO8lSr2qwx5LJnFBkVxQaNRLbYK8Ve6sfgIgdi4mQpTZlXKuBiUqBN%2F6mOZ1Wx7JjAAGlXt5TYDaymoq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKvBo7zFDT90eZnC5CrcA%2FSu7LVuMEx0Fu%2FIBytTa7jQp8UkTqFfQbISbFXdrSWKj6b%2FhWRPTZFjSIAs1RLNOu1h1pPSv3yVxNyn4YpZaldn1ZPFHyl19Oyx%2BKtLveMfEmTM9DeURtUZcVhhBI1RyoNKIecvzef%2FBhwB3QGmh40aVho5YGFjDoujGRZxW6AHbMihICcfB3Nf88ruXVXgGD8f2RIwh2%2BYoMJ%2B4DbB%2B6Gp9iQXLWY0DdIuWPMkH%2BZLf6UpVZ1EVXKxvuzShWUtJKJmHGRXdqCjO0qCY%2Fy45wWp3Vhi1cB%2BAhsxPUMBiMtRMHFtxVH5hTNTgHECURPNq2yx%2BvDDF%2B6cLgIHET9r1ctu8Tj28RTAc1PPJB9UQIW6qEmzCwEGdiXfP%2FJR5OpAyqNXks6mrkat8EbH9czkEBU%2BK4V4uQ458%2FHX73WOSBc3f7wvKZYOHFBdJ9jje%2BZTPJonyGuuYsC%2FP5o05HD0PwgxIsWz9HQSzUnVnXjCqr%2FmUHtD6kqb0lVa98vHBSDEhQHg9qdF6hgr7lRtRncleNFFHUFu8uVNxA0u0wpGx6qTasMrkh6JTOC%2B4Y7TFS%2F1yyBK5UjhBbX7tTYe%2FvnQblmybHiDEpPHZqk1er9JmkWyydglqlfnQNx2XUbbMJnYwr8GOqUBtbZz5dTmqsC8zW9B%2B3pW34m%2BD4Yn1hFGcvnbuqXNnNwJy2CGYFbdRLHZGSIrflwz300VqTuVduEpZHMmGHWCRWLGjLj7DCNXdvZ0gQtUT6R0PwOe5GRdRVvN6jbbD5XGxHoRhMGssslI7NphjtbhUDj5wEZFiiPpqqrpgTZG0n8KucsjRlief9WuJAHNc%2BrV%2BtAdPZCMU%2FLKuemuOX930yGnXRjD&X-Amz-Signature=adedaab3bc071a1d42b0366506b6d2424b839a41467c1a722be6ca6894a5df73&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
