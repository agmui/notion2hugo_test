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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLVZVUA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIGcx4RwAWwrVN0eYiFKp4ONPzLoULkvb5XV7rgESyrQIgMIvSLpCSMgOQN3VKADrI5nIDWhBcLbA7BwLa7kqAIF0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDCO30VnlCahY3yYAnSrcA2UfqZNBXDodCuxh4CMeheolSFcNi4Z3E7FVvtII%2BmnhyuM5rFxpPH0oAjKIPk2NxxebP3s7ankvJkkZxceOAENdGAyf7IPvccqwVBAYTtjMIRyJzISOoZFnmzZGF%2F%2F3U0FIJxxWhYJq%2BZpzq1mqPxZ4wJHHGxh61586ajgB%2F755jO4w6v6ketTnp%2FGYYWcLLqqV6PPqrSb1llw98UaSIrnu29hhKPR%2BU87jNEyyclotd96EM3tWl54giixNOgYNuRyR1MnDzKTO2V3S%2F1subn%2B2of3zdUnpXCddXbAzt9a2bsyt8CVOvpYHTLQar7zSHtlCozQO4Q7TrMv8YwLWiZ1AVbnu8yoZACdjyHSI1sP0iaguUyN8QhkzOWI3dYXbDeoKCPxhZhA%2Fw%2BsWSJtDMp07dOemlModUpG%2Frl%2BPA9xpMSevzLtWpbHsXHOYa62EWV02bON9aMoYpWVcBhFszPsqPhZTJa5TQGHilSQLRvCLZJldCeRsAkMR6D2%2FdwnbcZsftTNZkzxwU2k7yVDuEhY7m6h8iLNOGkxkuN%2Fv40ulB%2BEjTmZPxZ2K5f2lemBrOfdwwa3ks4Qrj0nNVik5dNVvcq6kq8eUQIGFLmj7IAZ%2FpzipjIfWj9LtAh65MO%2FIqL4GOqUB1tkHB4m%2FntV0kQiydD4aLVlhNfWjTtocJiTlhmixvl39JiLPSjkGRSEk7j8Lu3JkC9zWAZoeMQMzA7GPMEcMtEfQwEgamEjTjaeuNaZ9bNTXPPeGI5IbIRFP3J5DCGMTHkjqZbvtWIyA5KcmmjYsRmxwPaRH3FRJcc%2Fdql6zJsrf4qDRPoBCfssXJM9QErQeDXlmYAYoiHGMz9hzySR4jwGb129H&X-Amz-Signature=a4f75d04aaa2a41ec50b6b663a905214a7171bb0b051e8546369f655662b8631&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
