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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643MJ6WUS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfakLspTFGNE5sKrepftK%2F%2F6pzumig7Q3NWoOKcc05SgIhAMNwFhtotQb4L%2FZhNlyZ1LPWQ5%2BPcWacEGils1kOsOpRKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwbz837U7YWhSWkQJsq3AOQiqhb9JIH1NoFzbnvgseSdV%2Fm0Eyp1jbFML9nfgWEGX9mWgWG3EmKNVnkfvs1iZyf%2Fc4ZidpASprBI5dviXq0xsLV00T%2BflnyTnJ21DjYYHOLMMD%2B79kleP2qp9lJhiGeIUNPhzwlW%2Brqi8pZUqaGIvCFp1lUSZZw7KW0PXIzYemGytelHmVgNap9rGzfRbh8N5dRq6H6rViZpMWY8GvLTknxB8elEiJXJhKXt73w9QvsrMycQ7UTlU6DnVdCoQh6PVSkcZeDrtLOrp3n%2F%2BJoTwheoWBWzrPjKnDDW%2FAfTabYeq02kF4qNX1GcQ%2F2ZLOYxroCmiIUpIiO%2Ful%2BmeGkLydyJNwdjRWUKAMRk%2Bggqh1QYqrEj8FckuWOalTNJroLjrdpdQcu0bRt4sXOqgKWxie%2F837LCLNCbBAzIoECcdORQO3hmS%2Bq444egEotZ5%2F2k8E22D%2F9LouGgdGlp%2BnWoHu30H3yJD4W0iO8PAB8SS%2BWZkpH4cFAcCzZEiQtlYpD9uomM0hr16bny029RXuMJbuPIQXIeMTzcRMDLswIwYXIVspimGGAC3jJ5BjoG9VJbNNHclJ%2BpVBFyG454TFcLQdWgBvDPE5j8RKhZrV1i0S7hD4Awgu4Qr1ZrzDZveK9BjqkAb6rfl7isTJ7sQ7RzFhY%2F%2F71qjI2KDFYOYFukjbMrseQymxi5B36voLsEdHMfw5Q3phUFE1v08a7FCjiQoySJTBpGXCui4vX5vZCgPirdLAZ8QGk%2FHp4wveNQ%2FHGSYRikR4KbnillNB9b%2BfHLbpMLAjkkzny0NPkhbmOI7hhFOOohPnL86hGVyCfFiCWjJMpuX6ORp58moU5VMNBrUyeOLB4RwiU&X-Amz-Signature=0bef2f4cdb79720236ac919121540f053bb6d0b682a68e77e3825332127f7913&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
