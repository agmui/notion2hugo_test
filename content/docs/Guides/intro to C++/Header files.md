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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSFGDC5G%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIH2hX0b2iI9Sk9dPuHOaEjc2P%2Bnys%2BN15yJ9Q%2BKEzGjZAiEAjvAZq6wgTu3uxTfJJBtfJsnmS%2BCEKjkWP1nINAV8%2BawqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBar0A6UsbkhswexyrcA0Emd4Ao1YuuOVIfARtTacxGp4HoO1wGC7S5NbQ%2BWleXffGLVwKJJ0cz8kCRBCOZmSdNVpnGSKgENwdTUDWYPBHxh0AMq8ZXrVwLB8H7JxdrC%2FtVQT%2BPViIOuqhPUcUr5xyecF42SOhJ2uJEuMZf6izvMvPy5zVfLs7EUkjsGSXSzfznxL4hzqw3dsb5GHd%2B4ud%2FUZSR4xnJ8iP6UISe%2FBMVa2Kd%2BLJb%2BxndYTjzijErjjW2jCqM%2FbsHNtHXgZJEKASkvBI7YgdPeeOvN%2FESH4k9X4fQFsUNT5UkfsENrG9WU%2FMamCeMVncD6ud%2BqIMJ9x%2BcOGTQ31Smi5y0zyaCb4bUbrLJ3N%2BR9KLggnl2y5XLJetR0C0ZClbKTKKinu3%2BXlnK3%2Fl%2FtmI%2Bz5IjqCyZBajCMLJeIogXBQUQuZ%2Fqbne5p3Glsoo%2Br1IxBMfzRIUbugAeT0MdD8RKNgIAUxPaxO8O1tkSiYlcNQim0UsX7JISslnwLWkJtClXeeUxMtkdW68HX0CD6S5nTHYEDm8%2FbNpbZSWfQOWhFIb4wnXuqRH3QtRhaN9pPr6LOgRJRsHumIJ%2BzVCbO9EdG%2FmL75oLh%2Fb9eEZhrEs2NrlmIEqdvyXA4SqfthOaE9UrIPAOMPf1y8AGOqUBIsqEI03eNnfu%2BR5Ez1dul%2FHxm1fZt6OIs6RFSxgVtxbCGBKRa8TlyTnSUWz1VfFgGfuz6mV6pE6ZJFob%2FnVvLw0VtWj5WxYM7qTSCYlW%2BkHjmAccrwtZpYg6zqjRvWQlB7nQgQDij2w77ItVFy%2FdhTvBoBekQJjVv0zGZ4NOYf85kIbrXAJNINTW6h1VFuwmrAxH6W7sd85xEzGMQcry60JbLSoh&X-Amz-Signature=2ed67b8b967f35815a0661dd20835e6780e91f8474929cb1081e352f366dd9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
