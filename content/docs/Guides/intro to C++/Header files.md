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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BZPNKFU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCywecpYxcRp4AlAjkMU900SJ4asEr1IG0Wx9lJnMNcCwIhAJjieIMhGaVWZp5i9b7cMZ57F8vlYCPBlQGN%2F4MMK9BQKv8DCDkQABoMNjM3NDIzMTgzODA1IgyPuuElx36L3CcrH4Yq3AMcdG4%2BrqBd6P%2FWzuYeLYpscuuj47LJRAgRa6jLXsFvmSXmyKvbt9eG0ry50iEu6gh6pD1p6seaCWqCZ0FqfuCOL21j73TIN0TY7YuLwGo1TWpxj051hUSuC1mRkKGdDl52fifRwMqqC2XT3raQN8pmf2xD4KgHgPPoQjwXjpdPEk9qF%2F6rLDRaesuAJDe1Q7yna42VHeuat4%2F1JkFL2psdu1tKM2nV49aFswYE%2F3gTn6y1yNPg0EE7%2BX6aABawr5JMaomMhOW%2F1WaybUrA7u6AUKhcAQcZIKwvucS0l44tQWdPwJR1OzD9AKCKQezF1BTK2VqdWiWZ5Yn61H5VspkMKTmweJIIBu%2Bbs6KOTY5OHWqdSCty17TFruX3zPuXxYu%2FUKsGXlcoIR0johaZ%2Fp5A%2FyH5Q4pTgyXFzkKY5QUA4JBCv33hl3WWoFbIlxzeGRmaN4drMWACu1zAJDcX%2BCQlY0%2F1Sh0lwuaq9Ql68LpeIMuNIFt80xoNzHkiWhKH2TqXlpvYCJeS3lk6%2BLclCp7H27yYzw72F2fF9rGZrXDR1ibYRyBfsy4wj1Cb6nGqValOo1XV1LMDjwYji1yUSxguzd1exjSciwuiAlVBwv6BRVeecxksuatzCqaQGzCGtL%2B9BjqkARDLkNT9WUVba%2BmNEHANwVb8qW4OJgVTOgD9H%2BW%2FefMGThCo%2FetJETJZwcej69g180Fw6v7BcykhICrOvV6oGz%2FI5xTf9kXf1c3R2X%2B7lU6r7PC1F59kPsSISUiX1M5D%2B48ZH4t9vfquI5xLvVFVZzOGFtJUZRT6G8REIF13ZVwTER7PQDa%2FCxyhvrCKgfZqsM91DJ5vLUAOF02ssGZ9PsnQdcY0&X-Amz-Signature=e3bc7b9eb6011f7f734e3de92ef33546cc2f57caaf016c060bae7a3574642689&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
