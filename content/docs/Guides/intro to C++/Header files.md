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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO6AUHKR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCwbwcQwGzYymrVVA4B7LmfkVamAdszNmdFpClo4ZgtnQIgWwqLVrf8Zc9lI%2BmiWv%2Fc%2FrseL4Ar6vyXva2T9u7vrb8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FWcS6rCmTk6AjwnCrcAwJmEtMm3RjHC8U64lKtDLOvjbvDFS446dDQNCsPcLMHzfRCJWpzZZG7s6XBbdPZJ7ilfHaEq7n2b3YTcQlWdWkFkdGFl%2FZaXjsD6JCvdG%2FIgaiFET4SUTLydcrsb%2FSt8UzyyrLTIfuzJxg9UqpwxFi20nxv7IvczbdwaYy3q4PqsKxf%2FY0S1u8qTC0T%2BG8%2BPVl5nxtsEpSAASe9naw7sFKWJUy20VaNDhFVjjGXFkkRZ9My%2B%2FkLt1A4P6OuHccmkqCZLnw8US8b0M9lEnz2W4FUVutk1M581oycUC7G%2FrYFE8H0PB3mZwOCun5KP59B5JkkOz5rG7f06K4ghMzZAofIauWtNRenatVQw5ISNdtxITh%2BCCNV841Ef2RhNZ%2FGTStCzr094%2B2fffL2MZgMigSc%2Boer8BjK%2BTgOQ%2B9SUh0SxAEwgUQIvIgwCzD2bcc4r3taPNJwLwo7oEbf0X7qNFRKvJxClbHACUn9bMqUYOLmbA7GeR%2Feev7AvmCEbxWNIkQzAx1TyDxxZ%2F%2FVs246%2FaXh7YicgxQjkRkJaBd7gzmD36%2BHkLJgtltdzWY9IZke515EbRIxEEwYE5dgGSvgp9LKNTCbDO6Fwy8gx58e9TQ6res0%2BncyZXFbdka5MLSTm8QGOqUBBV0b7kRzQtn1JY9UUu9f3sEUI29RO14%2Btr2aPeQv72Mwd0qoqG64Ggii3pSfU9eWB6YFy094cGLMh1RhxC5UFRP0JXapVKMaLQsvzhU0RHll7sNFXsorNHn5NaNfWKDFmfxL5hVHOPnJXTaZ6AFx6u3JzowTVu2m8UGG1b3dbF1jaGxrbTzdpVLR3j0sF%2BVWnl4Ht2tDEzqY4SXcmF%2FetNTqXHQH&X-Amz-Signature=9a191518552cd846f3c86f6a6126b2bd6ab90495a4b4c94034d3de79609bb106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
