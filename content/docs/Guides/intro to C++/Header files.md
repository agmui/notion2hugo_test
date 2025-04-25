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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIL32DG%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFx%2FrP6NBSWyg0q3VeEjF0uVM3tvcYk8%2FklG%2FuZ1cMLmAiEAwCbEl3qIiPKUFmU6iQNt3cM%2B73rhoYVAu0MjKRCf66Qq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIx%2BqxUptDRLPjWowCrcA6t8YD%2FcXvQiwfbf0IHiw4oQWWlnuwWVVb0kBOXNBlLtT58OEGoWE7X9P%2FnhG2bbye1LoInVNZNdzCxiwiuciKb148pIQwpPj4JTa7pKFbGbO9y9mvfa5MN13B7Wyl%2B7XCc82F6y9AdsVszv12OfTLEw7rLh8A1xEzoHs17e%2Bbz8foY0yY8tk3tvcKikG6Pb2S1TEwgqFoLxtOdRHy9CNG%2BX3%2Bxw5STBOC5X%2FpNQFm6k9pP%2FIQyPMhHzFf8lMmBehlQLSOT9t%2B8fRTeeboFj2VREfJG%2FcWkblvHBJqnrM36G8wpeKLLxdPOxnPmNpnW%2BeRpxag5bUQvp9r5apmgDb09pGAcvdr%2BwKMaqso4IGT5ZdcPBLRUjxbDXhnQF9nyvBthF91%2BREVxg2eaJ%2FtoeCSF0kk5fP14Lt7SjOMvoMlB7ym9%2FM7CnC7bcqcjEcCMmk3qNwpCrJIMidYN7qmeOFko54N3WwZkaHd%2BuvA2CddIc7lDLvVPKsBtBNqYWV1BQ1MlG4n%2F0%2FIH%2F5GXMST0wurn22mDm3nL0Ozp64mrh4FRt17u%2Bz8d069OMbWwlc9vk26XAw%2BXF1AAZ6qWPiUt2gGiV3p9lwZ%2Bfrv%2BCMFmozIBzHd9UDAR%2BD5DNcIK8MOTmrMAGOqUBjtUveTuqU2%2FZdLQc5rFxdRkueysD7jPY4qlt10rmfZigheuUYXVoJtihf7RzPP2MReYWbxCoCkup6nPWUwh9O3XHdUs02CTMp77lXf434xxs%2BI6v%2Bv8lQwr%2BaRO31djfiyyYJ%2FNC9GHyChF6v39GgNGQEdszpjQy07rUwPaGHFoQJA3P77AP864Ftd5Vd6W8wAbUxCZ5vkVGldEfOGEZcnKLsfBB&X-Amz-Signature=faec48505141e29fdf9888d59b756f219801aa86282ce3f80717a9860d3c3676&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
