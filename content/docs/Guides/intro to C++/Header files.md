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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFA3O6UZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwbiT4QAUdRKxWpnU8w%2BlHXdYfANRDVGBStIrr3UUNSAiEAr9SkMR4uDdk%2Fj86dZl3Yl1YMGdJBvtN7MUDrDIQjS3cqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSidKtuwpYpGrzmVyrcA17J1diIaPda1djdfmzN3lhj3PD5NgQOEKsR8FXQqWQ7c4R7wqnJv%2FX9mqq6pCAdhiwTaOaAeg%2BsLtsTVVXO7OurcW9r1x74KgdPeCjcP%2FAtBqrOXFRf5ZUlPgt4%2FrVjdZ36Wpx%2B8blMh12f6brT9Ij25o81K1LhHQfqXLTH0PHTxR19XzoDrJTvGBbePqFFGm%2Fh0pZgWRxoZy7qa1EkSi9sBzVSbfjml92%2BFtKhpWD%2FnfG%2FRINAtkJ4N9kdJds7jV6hRydGny5uZo1PDGxJEJPgR88MoQsjXCTyfrmIfiUp4GFqWYlmynWZzq5mmGmnZRPB%2B6YHLSB6KPjxg%2B5CBF60wfGBowwSlssVtcFxsLt%2F2VhrHFgkO0YUNbvBzDNR%2FLVQwSVIoijri1DbfTAcVp82qLWxdUocWuiLDom7KxBrvS3%2B6W5iBoVeEsf7ycofOTeGDubUi4G%2ByDYlHd4vebBOB8PruVM33c6b%2FtMVeYTaLSMw8IJQK%2BtwpFD9NbvriX0aaH0FuESV%2Fg5KsMv1jbOoP8ncHEP49ClbRrvpQERbB5v727jwqZHXr9v7cbC8ozp7%2BYUGkZRg20R0ZbQOXoVJlqAEoGXxT8gRfAsZedSPGk2MVkNk91%2Fq7aNkMLK8%2B7wGOqUByBPh4MtgdHAOSNDfE9pbHXikMp%2F6UiC8JntNJ5KZ2%2BaT1ADiIO3lwUTGEdClsYmkHVdbrwV4c0QzUy5024RI83EB2E6ow9chSCZvEv05mbNYc9wQjy4L9P1aZrQzbpUDEiPpMy3Kh7viosFDbqfAP4ABYACxUAUM3E6Ex8rKTqJbTC%2FzOtvqwW9JkE%2F8OMw2fvAO2XF0liGIbLyp8pUMEQMRiZly&X-Amz-Signature=e36d102e85424a27c160ad69c85a729cefdcafc54430e4bcfb8a5f4db7ed48fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
