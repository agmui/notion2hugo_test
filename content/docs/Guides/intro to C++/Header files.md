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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBROZX2T%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2AJlI5%2FS%2F8Xgx5sOIEBNxl7JxsUR8GOBTOuLN5kl1vAiEA6cVxASgh%2FOP9t1hIJVvae6k5dPOz71b83Rfn2DL9%2FDIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN%2FkRP27vmxjyfpqKSrcAzcfk5gupXOmagY2FytCUyfGD28KmfNytFDds2LDXPi4J8Jruz%2Bl6iEglxlfGN7L45uZtLyUZ9uMQ7Dcy%2BzWVdcRxyJeVa6Ee3ozPIZUZ307Co3nEyNvzP9ImVwQzYkssnVY4boscga3nSvzzPzZsQ3OB6GqSMWm9vHZHVh%2FK0EC8HmKJY6J%2FATxX%2BtyiA23gStFYccZmR%2BUGlLy4FimIfqLz%2BxDVlzm5dX87ale%2FSubGilqWvNW3F6VEPQoY0Jy23%2FnR9F1RZ8X5TwOGtgA8Q7XlRBF%2BDBUMsz1AMFCCVrD7Rv4kOD%2Fd%2FfdPZ1CdDf0gGy2v8Oiuiu%2BZRx6sOKGhy7XTbHge8vmBmS0KRo51Z0HVm703Sy4xcewxVSDWLyYrMVfmC7OXMA48FQm3H%2F%2Fj2P2nq46W6znHvGb%2F2Egpz9vAirZ%2FUYcNquo6Qw%2B9SPmIVyE1gLUL7HB0oX9zAfSQWPStV9Ehb1yjOs8QhSQUHbqugdDqQdD0derGLzkEAyiUYBfen6uVOSrnBjLBuwjPWCQSIh9BRmhqd3zszMkYhNGdNZgQ9QcNlzStJBPfY45iB2c87ZowimYagXtj77Y55fzv2zLxnknZULtWI6RtC00S5528y23zsO8v2xaMKG248UGOqUByknuzhjkcYzwQbLGqxnL5Bcy%2FF9%2BYc7LwMD7gdwGiYRJ17I3Mk%2FtglPl1IuC8VrYaU6Khbc9HW2SdK%2FayUPve8aE8PGNoI07fwQRv7Gh1A%2F1OY4wBnMSvkOvdDjL75tV2guRD47msloQJC7AC%2F3CATWsKee%2BmBZXiJKEIIdDYAaz8bxtE8vvrPDDk1hjl9xw%2FKeLeiwv6zo6rXS8S5SVv%2B9u7O4A&X-Amz-Signature=4d81f79c0f895e09bd2db91e2320962d2214a94b276a1b376c5eeda6fe85381a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
