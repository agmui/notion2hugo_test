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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJDL3MRH%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiSeUXrmUMUDacE3mUIg1DFINwoXMfZe4Xuy7uBxEXIAiB1tXU5YQglJvxMiR3gzSDmoxoBIpg%2BgLF0u7LcwZwdVSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaOntNQPVIyKfowcZKtwDmo1PhiUt7106aDfTQOLM4U8YmimgzcdaagCCZcUNgCIpopPUjrY5obsGm19Ifh049eHAhaTXWAJTJIMU8zwWORouZxwDYNjGEmNKVdFiEjjVVIX0l5JVL7HrsNdMB9rA6D%2Br8ug%2BzZoCfUsszIv7K4jfTQvF6pP4VU3lBcix0YfNhi3g8l%2FGmJZko0V7JEhFb0HBLzADCC0lWoDPPqDMXOm%2B%2BG4fx%2BJ2hytnojqwwX7xN4YtB8zZszOyyuv35YZyG2Ztb90E%2F%2FvLsYmWFkTYz7jbhUlT72FemOTNwOu%2BuuT5xfCSv6YjfkOlVgX15aVQ%2Faa%2BNUMk7K%2FoIgdCY8ZgeXeaCZkmJi%2BrZ%2F1P1By24A7y8gW%2FGVvoU2EHQPHOD1qus4xBocmwK9w2kfCjNOJ3LkYBZVqTuWTa0FiqrZI46fMvb9XxglSiCFpZ6JSXfB7s5fmwxwT8ZEnmbO9IVT%2B54L40n05p16BcHR0X3N1Qqs3No9JuZO%2BrT8sLxhvqjIMICFtPGsceqSpwCoH2xir5jHPK8CGLtECDGer%2B5KKW0VSXtzpOEWK3zzPs%2BHzBLzMa2OKqEZmI7pTmV1cM1dCkrEpU84HmdpWTOK%2Bu8m90wszAdWPEEl%2FXTN8JhOYwtfXvwwY6pgHU%2BDV5dgMCKvH1Qtvl7C1%2Bfs5d7R9PGAE0Uh6A0WKydyE0vzeyx0%2FOGRx%2BicwaXUtJf1xl32juokftuvreGrtTprVXQgI0Mq6LOuy8IplM%2FGPAPoep6vtt8R4OtA3Qvmn0L7qwB6sLSPdm70xwDt72i%2F4nHSiebWpOCS10OpVi3MJddywrvryyonZ1ZdRZ2fM7n57nkwkxWZsptxIHe9GoVGwWYZey&X-Amz-Signature=2e5822bffdbb42466a48dae9ed9e3a9bc098f93012d5e5b2ea4dcda4d3f225b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
