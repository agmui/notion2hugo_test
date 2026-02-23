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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKHOOZG%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICeMtf%2FL9ybRtB16uOBSwcvJY50lPgnzAAfitHbFgFdvAiBCixAJqhaFS4OqOUuplP1koBcPY8WC5YtO1BlUzUztVSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhU4qxegeBxRmV4ksKtwD6Dqhc0oYMZawScDWbe%2B7tFraCw0NBCQR%2Bp8hdf9yPAvmm5bN9%2FFV3tD5WYrifUOpO4UcWLBphheiiMMYP6evZxUvHrZXb9t5hx8aapE47u8q7ztxrZt60ubADLv1j0H%2BBHx3pQfBwGLdUuYIJccj4ngw%2BZNT35aiE3ncAYJ1CwXnj0uqRJ2i2nndpPyjGik0FdIkFsyBnvD0QWbXlaEEABCQeEuNx9%2BEyP4c8ms22Qy%2B9rAJmyLnSLTKl923nm47AaJAdn0ljOhxXJVsoktlTHLbWy60IynWf7sUj0mIdurpMJ7e9QJIBQGuhHbqqdiYa9a4vjcXetMHwt1yNhYAg9biMkoSyZpsP%2FDEeIb%2FajgZals1HlYe4BHJchW6eX%2B8JfPy5KaO1scsTvbkv9tDMvwRBSiuplIaSD7AHwCUnL9FAg80EXX1Uy34Ya0U%2F3BtV1WeWOHGZzcg87mzJ2chg82r6ilGz9JTRBtQm6XfqISoQQlF1cQoe%2BhchXpJxgLQJJefPDsYkpMZqF0gSDQoUi2oL8%2BxkJpsjNwOAgHVCd6WwFrC%2Bd8pPzpQVTj0tsGc1x2IMiO4tjDOVmvIe%2BvgAVunEEgnQnYKM875YDlfPBuppiCpgf793yejsqAwzevuzAY6pgE5%2FhN7IaXWp4cdf7fDlTe6iBerM2Ax8xdggCvmIYf%2Bg2H34rn07JEPnl1UlMRfCvO6IaWTfuO8jLW26AHuWoIOk7sWA8qhK%2BGZRd5ScIT5lEgewX9J9W546qkuaDARizfqfS0LRY4VTr5yMaU1mBBqPFvb4FM6NKAbgPYpG1LRWOi66jb3qQdPIB2gvf4dyBS60XR8336u36jRuVrAEwhzZ84sqQL9&X-Amz-Signature=b8704889cc5e772b0ca5601b07138a5fc24250366d446181c2ea018eff9d687c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
