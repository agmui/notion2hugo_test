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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQGZXRN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCbzg%2BCS97Sh4dherZxuToHXo2Z9bl9%2BS7uXQmQLNNTqAIhANDEAtlcYfk%2BLRTFrPfn3g6BU7Nk3X%2F441TUKjXw3gChKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6xK4QQH517mzTDkoq3ANldkVU1%2BmyhD5p7JwCfKGxHyyRofpGyZkHOIsKLtJqdVQlt70pxFnkFc683KC299QLli756UB7MBKNcgsp%2FOD85JmkAj4cxnX%2FlNySIlUqK093k5kj9Yv5GPhEXPE9%2FuiEJHcIwqbimtaqkIIT0aWH3vIqaFHMAcK2TA6VSu%2FH5RWm9qdIgajXUx6lQ49mKA59vgsR3A2u%2BXsHqKrBIyTOpOq0IkWxP55%2Fiy0nWheDISVvmykOS2yt54dzU8Eig%2FXkqBe2kWtipX1bY94j7PYBENyNH%2BCqfbYFBmgXgyiU9Luh1j4nM5BZxbmWRzxGhswdGbSGyKVmggoqFyJehD71uoMb0jEfAiDiIQGOJ2Re6kNUJyrPI1XolM%2BunM4ni4HmvZ7TErBqxfM%2F6nhch%2B5i0dJoy1uOad%2BzLYqsu78ITKiWB5SYPb%2FKz7oIj329cziRFD3SsZDWLjK8%2FoxyfLJNS0WUVMhC6IONywmrXXwQVg8JvKX62VSXZqJDcUyISvqzCoaxKlTYy02OuRGCBS5cgBBdLaPY%2BxH5IQxis9YPEAoN9A7YtKMT5ghZOrFUXY41q0yNyRjhAt3riUEjkMdLdNZ5hh4WrEg71w%2F7crZoG9AHugaTR5MzCYiBsTDCyNDEBjqkAayh31EyW0ybMag12lnhLDaS%2Bl3BFNiheObxWOYIErPcMRsv1iaAF1%2FaLXaL42CLyWvRq2Zbj5%2FTeHFVJLch9JIEztepYeyjlA084yvdeHUGWjWsM4ltvOCGRB8KHQwrq1sPY9e%2F6Cgzx4epAhZwDvikTNV8KQafNhiIoWq%2Bqk7e6r4iCGgNKuxe%2BR%2F8OlWGiOKCfdLec8SzFJ%2Bqu8eX6f3RJwWF&X-Amz-Signature=e87aecc45bb9e7d6fceb1dbb67813542ac01a0e4793fa5a9e5adb50c46cd5f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
