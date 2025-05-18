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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UHAVN4M%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfZOtGfXSh8qqSq1Omaq5be%2F9TgdpauE9%2BbKmbGGCpBwIhAI9JUO3IOq2BVhI3YXMDGtr17SYDT8tqvV5474bI9cmXKv8DCHYQABoMNjM3NDIzMTgzODA1IgwzAeH8EJCNmQ527K8q3AMjuDLCnsgN1lEeKsqlxQWeuiwAbjs6O7yc69ZFEJickNfwNpPVh9YblTdgh1WBtj0B%2FlPKy3x%2FKUEivp66wc3WpLV24Pnq7jsQdBRPGxLMkI4YVv%2FVPHM6dtpRUp4OeRwU8V9QMv2LHSozzXNJ1XsAYz48322sKnOOW6HLho36ITvQesRa27jq2iSZiLJ4Xi8wcgcpk5YGRYI3oZnuh7AUM%2B%2BGvLAmX5qng0IV4qwwERisO84LC8DNFs1IV5pcF5r709DlC1U2cpIds%2B3D7gPQ8gQYN6t42tDPQS6HQlVdn3zx510BVcimrfhoofp%2BK8N1mOP0G%2BVZLmWqRf5sszoP75AbONAiKvgrkTuDvD6tO4TTJQx%2FxLIXklqczl6BNDveMY7p40PNPuJxfnB9GERNwrs%2BMZ7cQ444l54Rdbs73ay80Kl13ocJXCFOBziM%2FurW7t6nJ%2Fr37J1p%2FwofVo4oPu2T1IMpwEj8gfgosxQB4teFA%2F%2B3WVJv97Y89N7mYWBBjZ51M%2FDfot5B6dCWbJJLlHkbgAkrW%2F21aOejV%2F8RXJ2WzDOERAjGAJEDvIQFanVqdA12mgOZ3mgS903Z55QaBJmETBp3Omm2mh7s4mlTwFob8%2F4FgpLDo%2BFx0jC7pafBBjqkAS3Es58DG%2Fq65Lj%2BQOH%2FVrN6ywYGU%2FuKL51KIjGzzYL33WAg5UjH%2BM4wgPaZuLY2ksxcJAseApLkQvbB3M001gyEdDZm3GxfjqC0iojvDenwkq41LfHQ1%2BHL3knAIwiLoTj6zZxS7sspXM4KhlTzA709TxW55wxhpodgznRsXyLIHGt40ohi1izTBVlyepae0GWAxlZH%2BtvWSD2fbIWVjUKiURl8&X-Amz-Signature=1067885ad01b588117b4ff85b04e80f4924b4e8810bfbfbab7fbefbe38dbf089&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
