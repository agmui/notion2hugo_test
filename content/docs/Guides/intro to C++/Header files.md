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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYAYORDY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDRf1jX5YCRnzOSkD4ye0w8o4FoaYNrQXJ6%2BPRgt1xJbwIhALUKf65%2Fnat9Jy%2FHqd3%2B7RUcyS3QdLCLsktsJuCnZihrKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztDy9lSpc5jEFlIdAq3AMjj7f6Du6hrMlUb1mZA4VLR364iUVDgO0iO0ksBbbQPcXmdAoxepIRF%2BaMEVdyyjLsxwM9RYhDV3ylMHjVtcKcmqUcmKm2zhPVbDMtrW7%2FjW%2Bdhq6h2QC2SuqJfRVXp05MoQvXMQVB99vJdwXOQCvel5Lh8OFoEGaIYnJvCrffuPjO43XHZJc4s8sRjfKauZ3Kb872HVx4A70D7asJ6wdSQ9TZtFr%2FjbkZtodeQnQr0AmOBO5EO428auvow0cXpUUJHvyd7Tw5h629N2TshDH1VdXp3b41av%2F9za07Q5YwPzpAiX55XxbRN6T5YkHk9h1G8RQMknHwv0DxOFlXxnHPzPo0VvlRuCvvcH5j7kM4I9GNyrU2Y5a3fhLhnURUsd2yw3pCq7FHLIvoM%2FJZmeV6tmfm17yEisbO7x8UXv%2BM932qk7uj7dNeS9UM5VHU34CXtMaraLMir4%2F78%2BB1H5E%2BKKQVTFU8%2B6MN9hII2sHOyfZE394wSVqgQbAOfmG3nuMzfkwGxYCaHVPY5IaqJUbQll%2FGRUW2sIJGbYaCL8eydT7C%2FONNPUyIn5kz5lW9pO00PMr%2Ft9AGf0DLf8o%2FT7vge8lQpfXL2FkB27f5xChVQePyvUp8og%2Bn%2BZaoMjC4k9fEBjqkAUslc4n0JS16guted%2FHlLoIT1e0WEhi1YDP7QjZ8JNzA83eAnes0smsBIUOCcVZXFpFSyQxefeuhqv7KKRikYkzBgTZgxmcedypmzRSfTPqWMTLBhX6IJYSeZzVTsOZIJNcQklklxq1oJ%2BMy603F0G3L%2FHO0b2XxliOrw70BD2Kh1RAyeHyOsB%2B42ptEOdF3MxM4q6tOwbVN5GdP%2F%2B93eFzl31a%2F&X-Amz-Signature=6fb6d72626513108462533e5d4839fccd4bf604ca17b2e3618fb5dbcd9142ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
