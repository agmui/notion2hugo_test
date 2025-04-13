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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646FOWCV7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDRY3I0rA23%2F7SjKBVN0X9SdU6bbiOjz80%2B6JWBNwOZtQIhAOvufT%2Bts6suj%2Bg%2F14C%2Fl%2FlUwDwfzjd2wjeQXeBrDOYyKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzju0OM9dM8QBgrR%2Bsq3APJWD67Euj7DX7t6AYLyHTHlmLmKV7kS3dz9rwQS6ZBW3gxKHcCunyKjhOgI9yreQZkKPlzIcRYYJ49%2B0ntKIhxiFmOH3SGm0sgHqu3sLnIMuMbzeTeIgWjyFPA%2Bw2W3eyvCfQklOWcPoBiNjePUvx4VOFdpOqSRDE0Oqh66ADoFr0op8Ru33OPyzNwjQ%2B6j1QlvfR6Dx%2B0TvKn4%2BNBHprulwOAm7ltwXFDrKnHwKLLcQrnYeCT3bW3hcfiV%2BzvcbDP5V04p9RscqLuGMH36v8Ed%2FjgONRzY88Ot9bJ4KwyPgmMlLkfPdLrdD6KEqfYYC7lsZSIOLBCZlM4ZEGvjMC%2BtXH8C2OqYyXZzSTPHPYlDBlynBmvq4HfWtH9y9a7pWT1fT8yihXsJvU33ZHgpk9ELwxyco1jNyHczY1OrLuGj3QbUwTcM81r1McxlWK4VEtzo1bvUM%2BmAzJ3UNJ2xvW%2BJtODrMOUvgN3yZK5us%2F8OsrsFVnJIC%2BXL15gnVDGemc%2By9Z71XA94ubE7v3bnRspFeGBWOQOnwVPVqwJ7oy3qivbN78eLCwIXjQAn0JfyyUO9OFvDtk%2FxhMbPKWlS06%2BF%2BVqkSqj9VYkDTn9rpfUsRlOnf4KuWygOwVpozD%2Bje2%2FBjqkAQWISjNJPyNvf8FylR3vdxDemGq%2B%2FGuG4yW%2FbXMiv7g%2BeCXrVZ56e0fBQvtfw%2FL2ZitnYyHfbtxjWQSyORI%2BVFV2aMoY3lvfmTen%2F65CuXsFjGWVIgPhpz4T9YrJkagXfIEYchNIDqsEDKrORF9dgL35BJBkS6wTqWHw1yvnMNIglXd%2BYGaRQiqVO2RyrBL3yfKOg26cPUIauiqt93YuFU9jDKTO&X-Amz-Signature=040242c5ac1b9a696dca21fac7f051ac2310f4ba5e37b3d47c3a3157c0566a97&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
