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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZGPDK6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1CkHZZoAjR8Neb0s05CSvVH5fjyhptE5ndPszK28LuAiBB3%2BKExv3mALRUp6PTAbn1ZlfV8YKW8fnPN%2F7AW45YPSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMSXRWkISj57%2FyB7GKKtwDL8bT9XuyxkId6%2BXsCZYT8Ys%2FzmS26wPHdtFVwYgEXqUzAdXyweVdcNnF9QTqB%2FOzSSTdrRxrclvVdiKvL5Eu29gcXcDjGpl6kAZApsNMIl15mTqbuOl9GdnDi3w3qQMNbGr9B2SXgw3G2w0zq1rbPZn1nGjWiSwnjYjztxLnBTf2wLKweY29GUrTrfgEQGoZgjeZOaigA4ifOYOKL76KQSORGLnlC2fux5qQm2GAVMQm0bYVnv2LCVUF%2Fz1fPThtg%2FJSOnbU%2BddMvDg3uhXIyDrXoFUHDm17jFbBZcJdEa0gsNMGRSPnrnQhVIFwzybkdInfwywYgzadCxxdzLl4Ug6sp%2FB53eOyI4lc79zr%2B5dKgVtCDghkGLOE7bYGLOcTGO6xrdkt3ORN2RphxYMbtxUXbzPj20rmhhSRtFT82Wi90Wvijx%2F4ED9uqcQI0Yjo3pgS9p75PsMdZUabWDYanBj7uEQX%2BuPYFpRN2Tyz6Pu78GLAMQNCN1Oa6fFGL9o3%2B6TD9JMMgqyv1ZdhLtY9lT8JNXc2bCwBV9rIr4sCinY2NekijiYbRtaK2ZdJ7Hbj%2FoEp3UoLqSX8tNjqQF4xzrQPSPyL5gel%2F7a5JNYYAwy6zxKdKG%2BPs9aEsygw4%2BejvgY6pgGgeF9r%2FWmSbz%2FXgRjdynVLS%2BY0UFh%2FpJy2vHx81%2FLFeQSxyaGV5fk9UOvHPKS3zSLfWjZ3Mg2iGn8fyMQMlBd2eYcZeZGycIoT%2FRrmFEcTchXAPbp1gtIkDMfeEZNfZ5kjsdoD80yuUnwM1eNPWN2lXdOsJnwGHnuoy3iFkT%2B6834oUZf%2BVydqGbsE4mUlszWzEK9oOSPD97nn9gfdQj3nZOcMq08K&X-Amz-Signature=4b929d73c9eb722647edbd8d0839787cdd9c58b85bd21aebe9ba4ffad06ef409&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
