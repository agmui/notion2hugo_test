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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BU4U56Y%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr0PGSpKNjv%2B7ep9xTzWLzgKl3azBqmT05etSNgzxwqwIhALMAzC3H5p8t2i3GZRBjXnm6VGAPOUEq7czPbWd61LQ6Kv8DCBoQABoMNjM3NDIzMTgzODA1Igw%2Bpg06ss%2BRAwjka2oq3AOHrQAHMCv9ihhTYwxCjE%2FaZ%2BRQAXYOcXiv5jrmahPakPuPaK81cfK9J3cpDN%2F0FcGexU5QWODIHK6EFemNvBnHd9PaCGwX0ZIbzDwG6cg0VFAagZB1JGL3CsOENWJfUVv8EVNX3ptIeMF37p8EHX7Jv8UfeVCp7893wHgQ8aoHSv1BkGy%2Fste6yShqwIH%2BFgMpw5G2I7yKlh3nOGDJ2EyDrQzOyloQGbbXqcpptND084OxfmxT0tqtU%2FnEVXUiV%2FQjf6SkJlcKu1l4jHbuBZXW8w7QkJHVnY%2FDIyw0hr0y5VaHrl8qdDr3la50H36dKh%2Fituzo879LJLCmdCNHOP%2BAsNJ7KMD8I4JqXGdj3hwldto3Zd2wtyKzG2ycf9v7W4xyzhAlI33O0ryFgk%2FfQPuzTHmk36ei9CvmuRyrNe%2FVoG1v87n3JFBpiU%2BtSovCW3JZl2R4Rv2j0jUwwZUOJmpkx2K8J54aUu9bg2FwDBXNqR7mp3r1PlTlUjQBzuoVfO%2BudCJm2kiM06RUFeQxoSktlfUkH1nPW6C3Cd0T9GKqgicDfGTcYvnASRujjlenozqZMxkUu4V379L7k0KmuCZ2uwwwbUGf1OKOAZkAAwZ1EkpRpZUPjPE4biH7GzDv%2BfS%2FBjqkAaO7KJ9kMTkDbQTZHA3bykWUBlKrwRtXUqHX7whO8v80f%2F4VlVeLqxg6ZAAItiwRgkwcShkXti6NTpeenbgmX9DEZZ4s6R86Ub3Ktx40%2BZCH7uOBohb7%2B09oL8P%2FiNmaTyLxW4NuFEwAVJTV5vWiZc6d7vSVqvUPZ3UP72xILFVmXLiwZ5vkmwiFEgVR0YEXQ68QC1bFKOivtFRB6sNPYkpsD3IR&X-Amz-Signature=0b9fc785a17e1807ed6c65c024ab3b8dccdfb50d0c15f8c4289fc7f0786d7727&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
