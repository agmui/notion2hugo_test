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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4INIFCX%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG%2BUwi52%2Fl5PWz9tOgPWND39FkxpDClTacR4QFfeDhoLAiEAw3XRUcJ%2BcvyEM72CU8x88mW4cNqLZfAV7DiV7dOq7bcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBXj3bWWdbwpW6%2BLEyrcA7Vqo1lxGq3VkVD%2F8NrSGkx4JEhiRr%2FoM853SBpndD7sb0kL%2FexS8sOBO12ZjDWnK0anG4SVe4zPAKmW1IiL27GZplEzfgryMjdYQ0p7PrbkgpNwWLvZad6zo9h1Si7YTc48NIyjMo7cuIB6ZcrSG%2Fejokte8PGp1DmdHL0QleWYju3uuA9QulcvrAA2TLg9VHnoaovBnq1D8JPkiU%2BRC2NauHxHvLMNQvt46lfz%2F5%2FmSKpyNMsHZxQ4x8EN9%2Be2q6dqtSFbI6HP9CcQ6IYqqzxKouxVXS84Nmq69k%2BQI8lO6lYKvHs6ruweu6l45pT5tDR6xna0%2FXHMX6u8S0ghEJBsrG9KGAu%2FlomY%2BpCicMVhOGknNuLBIIto8MCWoKcp3OICKQbIm8kBVC80Yo7As7xJ9LHYXdgWUi7n8F%2F5zMlOs2fxjB0IGuH8agcihtdx2%2BdgO%2BUnijl34SjyIM4Z%2FexzhV67MezwUPjNtDLApBVYJqatxEKLblra8n%2F9PSYbcmbeisFddZXRC6CB1TKjEVByZp0uI8zqwUJ3FnuSe5QEfUDQauTpFDdAgwx2AFMNBxDUR41jb7rsrPrCEVA6mvHwr1ljnHy5NHfYje4TyV1r40KcrRZbHnWTPsfOMKbm0cEGOqUBVfxv64kTchV8UOcngKs5QUxbUuWwud0tRF24cDSgpDl0Vo78%2F5236lSx3aBExWo9bcxOwRcgBlojSjCv2FL9qGQv9PhpOolslosym7%2FNM%2BlGzzb1KjGwhlskztzIFiiaaiuIzoCRdaGFHLEuhOpi4CPfzw1lngnYUul4PSj65Be5TstvApn5k%2BMTqAhVP8sJTdslWSvQt4h75HhAefL%2FuhIaSAxn&X-Amz-Signature=2d80ba901c3b38edfa80e9631db2e1318eb13d8a815dbcf642d1477b93ce2b37&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
