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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXBZKUZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAblilbICzQvqGfMklWHuQn%2FaILNGTfIw5QjWI7B0vVOAiAhJYGI62AiZYM4tM2JLCcJApg6vUTT%2FBVa0MDeVpoUvSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQQ21QR0hDGfzSoafKtwDLudbJXIZp82yLRDGrCKnfQMC9UH%2BmI47hYH8o1Sgh4DSCsFFgwJq5YdMFiwh8cHqhMWlvMSoR1wgN26v5B5ynMFIIG9Ufn5OQXJ%2FgERmXYM4DwImjquI62GBiMKvseeKJiqlu0Aw9kQ7hha9t%2Baak7Ad5pwkfd3v0SA9v6awsCDIpw5xEU%2BuMyIXx%2FuIuNDg4A9N2h39urPihoAgzb3KO3jLENp2ZyPovFous2dQLgFb8cx1aJGLWokzSNrx9REzaG0rJLz7CUH%2BIosBb%2Bmqf2h2IVX%2FqhqU2dAz77eMqtuN6EA38ICpsTyNoS1sDBnzNgC0Py%2FcKzCDO046uEscLMEzWEcB0HjgkN0DBNXVl39ljtCkT67e9b8TBWXbnWqLm4yJiaB4UJvgOGzlR%2F1BOFjMzZCtfbZ%2BSw87eKLom00RKJNXN%2FPmG6qTzHniEoraMwEj7g4kf8LuIRgRti8xmDrjiqSgB32UUHesebNND5z0H3cgXQHJ74a13873hUuzaKhblkui%2FEU28WIVtuvwd0lEiRm32IUfDQZnokOtAURHkvAOZ8ywn5sHotZJmMGDWwL6p5u6LKx%2BeXnJ6k06IchK4EqjxT2L%2BBMc5bDsTfgP1B98O66bPE6fhAYwmK3pvQY6pgHIT9QyFGigxJ5NbE5eu8DVlA4Z97JF%2B9XPCTM8XkXl%2BdBsfrCG3p%2F%2FdxdQeFnMGgZiCtZw7%2FObm%2BHegI8HxygOeiO1vGs%2Bm7cDNCwWVfCEdMQlGfs3tcW%2FdRMKLdz5H%2FiHkRfC48lYdcjbFeZYn682C63fsFouMHvOPYAYMG2gHMqIoxaGp49hsPamscVQkjn4JK4u7jxoyIvegUFRhYGpbeISorT%2F&X-Amz-Signature=0f928ad8d31e17c18e340e09bff36711fde676be852b7761d380329184dc4147&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
