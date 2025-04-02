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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNL62LP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD9qRSedqwKnumxYhnh4WUwHr%2BAnaecDHFEr5PmulYZrAIgGd%2BaKl%2FW2B5OkQs53T2kftSkmJlgLPEt%2BWgZ0TDUFo4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5Oz8%2B5HP6rw%2BPoGCrcA8av6EaPoKTfHrjR3N4LioIuBOZD6RZV6V5d86ulDc7i8a5o8GdJkB9RFscCN8ur7m53US4HvC78h8FGUKI9lkrSERtLlqls6IJM88QND7ivLCimiUN370hEnFAHHPK4Yw11ulmL%2FNE%2FnrbIM4F9CsWDcc17PNGGWhlb5Nqg%2BZeXV2TRveGUHN%2Bn%2F6ZMq4zYOLUHQZWcAyn3A6hCwGMuPzPiAVJ3RjSRX7J%2Fe56MEHez3fCY62rRpupD4oZHLKu5lvMCpYLUiEbCRbUdrgudjDCeDTVT7MqA4hP2ccJSrpUSeGSizoQOUFl5zdfBHlrNzD26n9ZtOG8hl6HPpkXSUSIUiMG3hxaxJ7sPVGO7G0oDpm7Yla3mz6yvW6rpmPzBeciLeddZiEdnXBbSDj1R5cq2qNsVgplMh2aBJ0y2A0Z%2B04evh2%2B%2BCf3jDsWHoNJp3PyurlLxQO57cw7JeNypj5hakFeQq9Tz2IVomeKCAe4QR1Bt3oqvbEVTGX%2BFJugptmw%2FJYFa%2FQCi1VManoLiTRBwXywN9bZj99Ja4D6mpLnXEJPAr4ychcln6PBiBT7A8fM6%2Bp2zPNO8rjSXMgf%2FiAjDeS0ku3kfL6%2Fv6DkT6rDWzd5VssQ%2FZkIfbKEcMLj6tL8GOqUBD9dRWWeZ5G1xGKZoXeEfNVadWm81R4FnqsdGxaanq8ZjI4nHtINyAVIwYO8%2FEoVytXWptnP1zWIKXunZgMclp9aW6KnkRxFIhXMCYBvFuw8k%2BDignTNn276Q0o0QjwQRhx0lBtt3RY58T6pwKlRAW5vuNO1VNz1E4cxcqs5Db%2Ff0Hz3dmCMojjZYWLGzvcpPDX8fYiHnzkgtwCMzzvuGMGjzrBlZ&X-Amz-Signature=0d6a5f8b9915032263662ecc189b49d7c24a053b8d3de9095fcac17687f8f7fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
