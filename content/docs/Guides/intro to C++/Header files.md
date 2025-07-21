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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52FP6AR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg0R1Vad6xhTLlbY0hODYKrK5kRZidz2u%2BOQZ%2B4uflbQIga7RWFw2fqjUIT2uY1ACl2f8dgeCBDVhq5OihNJao1wwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCb81aUSbPY5Dk%2FStSrcA4FtFgBzwm30Q4QuoYh%2Brzwd9u4InICSE6htXYS3NPTISn7AAvwzQ2XEFp02kO0dnOH7oQZ2jBHZCjB%2BfHIgHzf0J3Th59ZiFr%2FEVklNjZCoegH4WOKv4YWn7%2Fq5Fs%2Fkp6durmwWVa9qtAV6%2BFc1bETGlM3aZgu2P1%2F1Vvk7v%2BMIvn%2FGz%2F%2F0B0U1d7fb%2FtVQRJdhR%2FsDQ7ujU6WKP4x7gTkJ71QeiW9Nr2yuT4JkNV7E983R%2FfsU97eXfL06%2FJJ1%2FugHzZlqruiVI0akBajS9ZrdK3%2BlK6raEtqDrTVn6wE3M%2FRT2Q03J3CffMXv3bl9JV2yRJp1blR%2BgHAJttTVzkQ%2BF4lmAsdwMu75MCZFcw7g%2BXHLbqT1v8zJX%2B7e9lcwzYLugM2v9%2FHQI1G4JnIDiMLrfh0JzVoB4Vfbw2UaS1QQiYNcZrUX6FGxUjfde8l32Y4T8MplMBfyWzeMjgV3dm5rKbceUEAmSScQl%2BphRX8ANNCGJCp4KtgNQ%2F%2FqZOIeqRtoIKlDOPQyMsMR%2FKuB5BLtyT7Due7lUsqVHkytdSYhYNrgZeuOmuXLmZJ%2F8sVGUcCJDgQlfkPcm%2Fk7alU4R1FrAQCeASUVKY%2Fbya9FzA3AiAGp89nORjaiXjV0MOjH9sMGOqUBwHUHfDY9pgbajFDYSww%2Bk61St%2BSkn3NMkT5tirAhYZzR6Rp2qPdg6kj375nkY2tiyZExE0xiDqa9yJYuv7I0I%2BtAnDbI06fXq3%2FA%2FUd3Qb6CjU4ee0Xw0hhAiagZUxepa0IE8RRa%2FEVwnQjPfN5NFpkgbsndBFBxPLAYdcA5Xb%2BsZ4LUJ22KAHk7vUCBtHxEzxS6I20XrKTbp9FxALnF7%2Bvf4hpJ&X-Amz-Signature=56f4686c8afb6c656c9a566b48a3f9a483816e55a199887516e959b228c32f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
