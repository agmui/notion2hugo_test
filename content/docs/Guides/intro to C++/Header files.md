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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ICUHJO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCID0qGirfdSWpIvIzXPnnyhSkdQZ61D5dcgBLnh93NYWDAiBzAIThAii%2B8HiffUsRbqQfSwURmwiC8M4%2B6ov9AHoZJyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMuWkmbuxOnltmTp68KtwDbamMAacX56NXS6ohzu87zU6HV0mxziOt%2FvuUx6W9iznOHhqz6Kw60qPMzw5ohrYdaZc%2FRcAg2FnA2FaCDpDep8ocxV6dF%2FXFG%2FkdIn5k%2FF12pxQT4Sct5tsb5COXEDRE67QGUGlY%2F3m0ZqlOfWdZeETsjVFRS1H62uBNOB9eZ2z3lUgNXXqn%2F0sGZOR2fdYD6vqJpBE8XAG4j6F%2FIr1OtDkkB5KEfNxuWD%2Bep66H%2FFqWXpMxJ5im%2FMMiCyyC7MRgCnUj9Kru0rtmmLCMHKSpyO1sKm2FWku7shjLI6UNrOjCoVdD7EbhuPXQrldul7SGT3NaGb2enVV0X7hva0m2gUjqW%2Fy%2BZg3EhyM6fBZSzZdIYGJWWYmS6kVh40YMzZ07Zsu3h5OAN6m8FPRWJS5hdFYkGV6EJugtaCfrA14QLPtV%2BVuuAi7sRi4H9Otn9YLas1PnHwRrRJJenQNqrRdtMtDZZVj6og03BiwNp70W60IB8K2yzyi0yCye%2B%2FYvdc5Wij%2FsQrPhYzTsVjqJHFo6JJKId9Km0FLIIMRhKbrhugTZbzkYnmD5vAwL3IFCE%2B8Cw9La2HNHc6udMMl8nShXo7pgiWukbcDJ0ELJnqUA5hFs%2F0hEqRMTJX%2BUdvwwn5W%2FvQY6pgGcpNTImoOTNA%2FyTSKDNw%2B4D9cF62hE7PBjl36IwODWhNjE8dM%2F07Gcv1Z%2Btw2a8V5HiJpEPiaFN%2FA1%2FwoJJRK23N67F59rW3guPxFYjmkFVfkmh7Errq%2Ft21e%2BZafJObqzzw%2BpAsfQzTuA25thHa%2F9%2BDAFK8ENP3wzEnsx5QSzwcMP5Y6W9DfYmkn5YDRESP4NAe%2FEzO39ykeuMNYlmYF9GEhFNoC0&X-Amz-Signature=4a2076968aa079c94097cb5459cc58c85f496c39caa74d117db381cbfc24412f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
