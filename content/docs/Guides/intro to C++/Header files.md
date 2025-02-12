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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQSQRME%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIIrwwQXGHvKIwIPysSMkNLYp0UtBcU3%2BUreCLOGXp5QIgctLrQGdz%2FK3iiNfkUEt7q%2Bp4nBF%2FEDe5CeNWi3AavsMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8W9BCIpx4qRxVrlCrcA1I5iTyZH%2Bo4QBzLsTKhNgISgpY%2BmbKGeVYRIekkKv3AvLJzHVPsNgiZnVgfg9tIv3UbTB0ffGI9QlzI2x2RT%2B1FghYxlv2%2Bj6UU5CaNd8hX2YoJNNMrFOjVQkaAHobq9xejEc1V9bYwfovY7bxvZqdS884W1GC%2BIaP3qqZ9frvRGCLTqUyDoXOxRcVu9J%2Fz5CiIi6V%2Fza92FCXaCS3GR%2FLrnw6vuoaluw%2BmWShg%2Fcwyg8Rw5zml7Wt%2Fd7QwDVvhRH4PkuAhKlcnrsZf3rzkZIsNEzrpz56UOq1HPIWlqQtkgk6qC%2BlekaTjo174%2BgDd0HHGKfWPHCQZon9twZrWZ82y3B9KmsIi%2F0QSV0pYTdKJ8IZm%2BlSfacCu%2Br2M3RBJxnwNxO%2BdYJxS9mYRC3vqDM2u%2Fd72eDLgQ46c8UHCHCkVAaYqkGV%2B2bWSJUHPicnBtmhplKlyav2U%2BCFlHxZ%2F4Hn1g7mSD9gjUneebHyYNOLooutjIvkkGuL7W4ArWKOD%2BFO38ThuC8IEtGb%2Bnfuutn1NK2jsAN%2BLDd4hJqAiSpuebIr5je0n3Q44fDmAdSUW0IjWY5049KxKG14FbfpMEu5yI5lg8Jhp0oEd%2Fc7VtbBMy6KRtnWMszyM61SiMOvIrr0GOqUBmrge8AinKNX7aIy4u7qGHF8ktT0qyxsGGviwyGu6WPBuh1Jvw9bDylTBpuVrTuM0dNo3iN8qGtVala2N%2BPCHyKBlg89nZNE%2FUJBOu5iNUfVmgL9X7zV7oNsFyE5HwP2qdTZeFbVNNjsyE9J6Z3n6ZnIIh6u1g0VUIVyW1rS0tGPRcMp5%2BfDJOAOX3PU3%2F3YiRm5OrIx%2F2qyt3WAkJHcTVsQVyXDP&X-Amz-Signature=74f7ca8cde4eaaeaa8edfcfd94ac00dd5d17738f68f9ea984433608197304f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
