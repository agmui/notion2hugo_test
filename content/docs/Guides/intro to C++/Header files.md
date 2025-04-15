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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFKEFRC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEMtWnMjaT%2FLXpAFtgevNjzMRD%2FYDdOGmi590Ll61g5AiEA%2B5iiuB5EMGaEMPaKlCx4Z%2FQE1qpZxpwxFFByMaY2U3cq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDERssmkfDmtJQfZt%2FCrcAx%2B84FfMSBFKItivzdEZ2o9%2BhNZPPww0tERq2FmwaM7QE%2FpqIzPB%2F19ok33OSbj%2FoZuEPsrd3TIIs15FfoR9ksWg4ZZgBkPXV7t3clp9uIcmFHJL%2B8KTj2hcCcjW6ez7SUyP6xGe7T7HGP4bGWKeEjN%2FtDDUCUqo26oX7GDWwJf1Ma3HqgOCgDP9%2FPDCFjO01meTUDlgUxLAXeIFOjK0XLmpXlbFGpoj6DSqyqZr5Ncq9l3EENOe%2B395IRJs0YL5IuxeHAItFe9csB1k5q2ERE12NyW96%2BHrBQFvrNULylgPd%2Fk46blLLE5Xxuh4fPkPS8EcTMw8891nB94SG%2FvCWkZcrBs9sZ6jHJ4eoU0GbutmJ8ffiVKNcaJ6OGUcvLidGMZl6o6dAuwFxpI6XBsM58cb74OmYlkoCky1zFStYxVLSysanfQTqHhgqhFXixEgeOnf3QF1fRA4O8%2B3jNNTMeRfTHRJfG0Kvhp5UU4BrTqfKqqzds5DAfwn5xVKxM5ctjGco5kRmmVLEhuogJwvdr%2F9428jH4urR5fM1XW7u8619B63XlHQlDyYOMU%2Fqj7axvYdcrvMJY1NJbNQx9AbSeQ5n6mmPKNFhpkyY%2BeuPAv%2FtwkW%2FbdRmkC6Ns%2FhMIPy%2BL8GOqUByvmwNVDP3%2B12hjyYY8Y4xc%2BLJw9p1aqq0TE330Ot4G4wqVsm0NM5OyW4GdRg2BHmBdbIahh4VXsuIQ%2BePRSVFsT39pGMF8n3EnW7Zd2l7V1xIt88Uhkhz6wm%2F6cN%2BTO8EcV13pxvPDbA8IdPiTQyzqiuM1p%2BzwHZDUnRx%2F0tldiI6XaQa9SfiSQ5WuIYEYYiHe3aHw4EGDkW6CNZ6Nw8Vil96SMI&X-Amz-Signature=7a26043fde7dacc393a46a2e267dce75c6857d8e6a4a5d433a2ebc593dda77bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
