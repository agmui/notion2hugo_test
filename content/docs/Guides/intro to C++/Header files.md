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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7E3QTD5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC%2Fnwf2EGjE9p1%2Fz6yMzmtuVcW5MiYPj0FRJeieY4mciAiEAmT9Gr9Sc%2Fo439tbgjJfrMIYZZake1zPHAwYF1%2F03blYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1auPK7LzcrnkTP2yrcA9s1QzqP59sTrcjgTSfL6qG8RXVjpLqzclDXpEVNqyNLpZH9tpP1VI%2Fhl2eiaD7HGYlJOUZhWlL4oxsJzZHcbCT88JB0wJZb470yp65whZpEIZ3lBki6Fzr7ASoq%2FpHA4IRN1n%2BKTcLHBmts2yj72K3vYRNex5SOql4JjvWtw6mfxIYNrkSUN7Ujcj9mivxx7MgdMUVHyol6c86SZnEGVV4gLN2VqRWqI4vSoab8p%2FUSr5c3QJqFnEsAi2db4V8M%2FPUKxfjVmayaz81aTJS5%2FHF215nDydZPSfcl9WSWYcmZPOzFlUoOVIAzKX9GQfdBojG3AgWa5YyIiFU8D0%2Brf7ve4%2F9H%2BuRD7CDMu1K8j%2BGFgFpOduySNYw00Cd%2FLtf03sPMYUvN2F3KsLyL493B7LmeaIFpHgK0EfJPi2aHuPEF3i6RxTcpBRe3Gc%2B05K9YsffWhBeSN3cMJ09lXUPNDqYQQxuOJDBMGMFrxJ2O7XMNLiC9tfPG%2BzdmwI%2FsxUAfwerVgUUw%2B0oVodbnI5033kvFGpEXweKtd6NmJd20FoEwIL2MSvEJMNmcijOaBdgxH9p2rNFtJeTDn%2FgHN3T6uYBPfcZqveth1kIcvzBKLl2%2FmSNKdroQNRsiMSUlMO6P578GOqUBhBhXLiHISdYe5t%2FCUeIOYMEJqCSAjLxKuq5M6SNR8C9DaYS8Ishj2UWy3op%2FYrOY8BCgJm0MKsfiEF%2F8kLaS%2FvgRIsJjjjzt%2FKUrYYhszAjtQHVClhUONbWjLt6aBWUW9D5AdWNv3FdI9etc0WmMzYQha9a9HUrKOa5tlbHt1oWh2ddBkwqxLWywKq9rwAp9OdV6aAoUUeTA3%2FvteeVOM8ckR2yW&X-Amz-Signature=96e607cce96cba513ce21f6e0082f6926e43ed8c9665536409f2f6e0ab1ecd79&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
