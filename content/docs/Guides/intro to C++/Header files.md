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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTXQLHS%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGY70P6xhjGA0dZvmuSr8IoqQNLbc2kLF2Spnz3WETWCAiBxTO%2By7unBfSu14G55ymO1n%2B8k%2BAg80k%2FtNYwwfYHhLCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bf2TQ3d36%2Fl5RI0VKtwDN%2FPCL%2FQ1%2Brzmq%2B3po8LfTUoK76PkykuIN67juzAHpoDOrvvllNCl8EkUaJC%2FICKrCxynfL78Brxz5%2FWNs%2FjvtGu5cqlLbTEyvFCpSsUAnFuERZK9ZKVuIOkrx8KNPy65KQNdNYFOQEL47N7gIZc2FOWH1lMAuVlVrVyzRvXCYNQ3kYNmnqv9ITDYoIOF2ONwBYBbjbyDrwH9NLyK8maE9eNo2Xai6TDvXSjSRyAKTjNJBO9eivp44nUhdT%2BXSHwdpleilr1IjGoptbCWwT1VT0N5rf3y9JGElB9ZVoUwvmH7L6%2BwC%2BlpFdT3mZxb1GlpLKIK8Zf7ikcGWAE2Di71gZZ8gtsl1CUVNgBiovJO%2Bg8OEvVkTmSAfCY6ZRDO8AOZh%2BQ%2BFLst7B9DAB9ZYFfZ0EAaecmhejIjICFNUdVIUXLL1jGjPSlqUirnsKMSEnwyhdaSfoXsrYNa4HbOOrjZew70cP6wiD8NoeteoMRjXP175csyjjha1eV6DXxMoG82bvwiG632qqW3od7a678nzK1iydG4zdWrSh18aCmfxckrMXegol6MzmB00%2BKjRwNsJzHsbvm1I8sgwLGko9yHegOw1r%2FZYQ%2BO2b1VZH1M%2Fe8JZCidKdf17Yu%2FsFUwt5ifvQY6pgHBFlSki%2BG7WCq49%2B6aO%2FlH%2FfROaIpsv4xhgIPOqisozs0T8pQ1FNOy57Z65%2FWD%2BKvWHiutynxh2L%2FX6h8EDRLPSBN3K5znWY7JM63QtvoIt8Y1kQXxElghr7rIisYGqmuOrSk4HTKGwiXUwSDjBsb2d4NG%2FbnrYJ0XTu7Ix4SsnM8jsk58Qu%2BpWkwn0V%2F%2FrG6ue8FzgzVQHnTD%2Bc0t6P%2BI5cEsRgG7&X-Amz-Signature=196a1dfa7c129a0a46bd592b9c5aa5f20442eaec9cb13ef99de8b21b3bb79417&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
