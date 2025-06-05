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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NQPPVHM%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDSKkY2%2Bi9YQd3WcAYcAP%2FioOl%2Fgsv6sVoW5YZNq3YgNAiEA6m5YANCOUT%2F6i4YgpyA%2FyWzBr87TY2W6PEwG9EG5KIcq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLb37UVw1prezqN%2B8SrcA9O4JZK0ncgNpZAIHIdEfgEt3ip5AJWpvhfAriBMzj%2FT5gZj866wGYfijcx0U7JdpczdsvSqSySTRJIkUh0V20V9laG94PRfTM%2BBNWCYeTo8iC4KjH4dJBP1AZzN2XpzZ4mR3jq%2FbKayYilJLdr1EHjrYOUePHUlYg8kpDva9qsPJhAGYe1%2FXnyuJ2g3%2F%2BCtvy2MYtMOC7DNxZo1rJxh%2BnFksjX%2Bdvb6dmWM3mZS7FAykHWxIEJjMhdSv6UDy2S74KjiEadWGeLXbe1owhWCSMzd9MtAeFdeOJRk1eGoxEEflZmZLpriOPPGPcH29WqbTh9jWIFFm4HejEFLqHeP%2FKw0hI%2FX1q9J9DvsLjgcpuUz5pT77GLCM9OaKS%2FbeWrtgh6mj3AB1j93bHmVi0hvzljESWjlOgGjLqivnSDPBdLZe9zvvI5CxWMdctTJkSzkMvmuYw6guhO4%2BZVQu%2BFENo3Vrt%2FmBFisFyS8nH1p2ySPJXzxkeaW84OpWJJoIrcKwFpcE3%2FpBAVy%2BWKkED7mEZgDsB%2FVlIUGUkhp81or4xdExS7hgdmfUA7fyRtDGiJUZ%2F98SpWM6pLOX%2BvEDNSs8T6N98guMJyMFOQPDMyoVLlKvV54AD1DozNY%2Fml2MKvlhMIGOqUBpKwaB6E4ibx555AQgnSNVjcmeyF07Ri%2B3DdaO28IAztQlWypz%2BpeF%2B8zJ73Ldhq%2BYiE80b5bFBCGwDCo2Wtclub6Yyl94v5Gxp3llmuXD%2BrpgFjfCBRH%2Fc%2FzEwWMNKYuCGKcTqsWEDLZifHiuYN8pGkLNgYC10SGT%2BkxyBWLcH6pcsLQWViRcK74kbGabJwM9Y3lR5wBuaSt%2BoIpTUYbXdD8qgyN&X-Amz-Signature=f3aacd1cf87677b9139fe34644468d2a47e499f516ae153e52a6ec59d9a67923&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
