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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T46OYYXI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGo%2Bz3QGmktv4RhNXQwfXdeNU1jz8xwYRioGmUizWUf1AiEAi5XQCATwAScrfYR4RumD6fyIF3Ea8EiVPagNSTq1oZ0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcqcJUCQpTvY29VqircA4HBlLrp0EtS1%2BQnaTPcVfvzTJiaqvt2ZhwSf4aGBywwB2Swrec%2F7DIAjn7GTmbcn6qICi5kB%2BxTCoaMmTGRqGer54k8AbGOomnKXR8aKR4OVxEDLEsh6n%2BMcvHYD0DWRENVsSeMfBxERaBuCYt%2FaQ7R8Oo%2Be9rXHzadxn9p7Wts97Vq27u8UmEPwZrmMdPFijlcd4BoQDT8J7BragSbXSEK3Hmad%2FY49Z0edNEm7l2F8FLDBIWHxC28VVZ44EqqRInHfnkOCov1y2NEVaAgr78yFD0L%2FNJGUfEo65q5RBoi%2B%2Be%2BWVmhn53C8AKPyzp8oLmPRiH1%2Fs8JAcNhEG5x1q3rD3gaJZdMh9lhTOREF7fzNdbw7%2Bp2rI10J6Zn8%2FfjIP4oO8eHXBovvpAgXsTWL3wM5Cqqlw7FzJZVwIpEQloMAnqu4IsiStuCVgxoxcpEmA3eDTWtdGP8k3mJZyWBZGM5LcUI4aco3lRXhvhACFnJbWaWrtjW0xpP%2FMZmYyLOhszKO1Q6OcD%2FWBODydVy6Hm9D4es5zIpUxZtyo%2B3jVX7QSHZqtg42tjUxM65raDfsbU0C3V4KrR5c%2BFimByUS%2FrJl7tGrAaGwGhPKI9435ExBeRjzJY%2BpMuQMn2NMJSQ%2FMAGOqUBE%2B5pCMdcbu4Qy98kfYeI%2B81sd%2BBJ8rIWOuYtGZ4Sdx6GTgiMXzm%2BqiX9bxFZrWwpHLUhT1mdLqHNuYPt1bHOL0TJhaYwRZyP64Ykx8SL%2FBOjEZi8LM5bvhfXT7qcO%2F20Kpjk9dXR666rFPr7268gX0XESa64%2Fcf5aVg38gyNIcXGw7cjAJL7hPkVKbLmePlEct%2BdiwOEQImeqXb4UNuW0Z5o0VKO&X-Amz-Signature=6066f623742d6f8519347bd3fa8051ed0ab295fa42aa266570576e75f23a910b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
