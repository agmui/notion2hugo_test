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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3DJLJK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC%2Fa0LtfCWbYYOa1RbtaVQP%2F4RbsNHoSd9qkhYgZg%2FrBgIhAPXZ30lw1Vf7SJJdqk14y3y0b7VqJ49KxpWpUUrL6cY7Kv8DCEQQABoMNjM3NDIzMTgzODA1IgwiZxroLwwY35NPvvAq3AOsXTDVMTdMKv4enQKJWjFSy6v2aZvKKUyqgz6aekWN0paAJE1JefP7EnY4vfB51H%2F9YOVjI9%2Fz1QaJWsNtNwEBcDUbMGgfM9w%2BGnqYCueEHomkzjdsbu92eOPg6G%2BgJMdFtrRTE4eas8q4cE1snx3%2BXQpUzTfsiyRvxof0CHL1fl88yhov4Gy8kCu8ZHmgXSzo6Y%2BhzwARrijlnpRu7Hev8n2%2F%2Beja2xz47%2B4%2FtDQHOn5EBg4GMIZ5Q73pBTXB0MWOJ0MhquQUv3GmvAJ%2B4znMFtJNC99GqnH%2FghcPJ4WgU%2F2BOSF9%2Fb7uSXPuMnZ1RXFH64k2WnfNWkkH9yM6X6BjaOV9VtZte7YTU5r3eovcSB1RQmVuypl7WLo9DqEMNdS56fy95rx%2FvnZjh7krwVk6NfXxQhJVESifKZO73Rp4Yy5MV24xLI3hMXXtynDO7cOguut0YmBfhb1n3%2FGNZIuKqKRwcOJMNFD%2BWeZNIkv3a7sNrhj%2Bx3%2Ff0yON6JuV2TGh9ixqogSjn5xq71GFeSMYRWaihUaxFPOE%2F3Jp4psHS6ZX5WjFuZf9HseiPY7Fq4Wv3BFpwK3ZKIeqdf748T7seSPaCiE8QUvC6WACWAirabDV8tRHF26OGHhWCjC77cG9BjqkAXECaWI15%2FjG01FHQ2w0zhHt2hA0gtMcHuEDCmZojylWfuHDRJoILVCpcrskEPfjVUzhHxfsl5C4l83VKls1ofHBwxeMJoZq%2BNrMx2K9HM0J1p0XR9MzeASCDNHWCatKprYfFfkLOednMcKm6v7DZW5STdQ12Yd6WOrXrGzm4gjFyWBlZzLByoi9iRXAUrSqQlg4aIwrN8WcVZFr%2FR%2BReH840xU9&X-Amz-Signature=7ec7ce53dc2d8a8ea4c540333bb530f6bdedffdc41855f635faf7313a4984cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
