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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OAC5TD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFYMmHk0Zs5jjlhXiijbHoSUnPgkoqvAXdJFNhGvdn65AiEAoiRsTYqJ3CTWbt4DCjIfTHvcTJVj9jaWmthiZYRMiz0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BuqmdX12uFvs7J4yrcAxWP9BpGn6Ci747QFtCo8iB5hdoGnGaHNY2sjFguswh2AY09Q6LaiP3Y0QJm25hgehnJNaD5wKslBKAZ035OGjTJAZmSKMfLYMbdID9mLjQ7xz0qfbqbTvxUYEyVbRcoBX%2FXhAVKk4DtRS4yefEv5%2Fzf4MOXSXpUsuufqEMspqGRIXkqnei7CnY22H21w%2FfpTCFL9xyzc8nJP3L2CEma6By%2FILwV%2FoG3yEIXrDDKufKlfbqiO5V3gJwRnBy01rm9OPdOWmCCCgT4ML4vtVKQfM2U3KeRo1NQjPbPB9t8pUImqQfq8RmpBaY6b2HHRp7q0C4OgKk%2FBu%2B50yabyrqhIjdO2qIT0ns8jwrXMHyqy2TNu1rHfcfqWMKMOO5OGG7lAQAM0hqcxUCY0B69FcaXwLXcO1ny%2FRKQQ62Bx5okW4iEAO%2FAcObtrEsHEtoZf8IHyL3qnoQFhpigVKVD7sgWg9OF235M45oMExaLjBALvyfs5oJrH27qnowHTX9zF8QFutNKbZ4fXWDX3uqdsjldusyrBYxzCc7OufDo4IoELid3P%2BBxoIrUc0kByZXIi4yi8dVkYmzkhYTzyPhxePr48Et%2FJo%2Bl%2BeLVTgS3JU0QRAp8Sd%2B39DBGQVlqYLNjMJeSscMGOqUB4TFCAJlLKfjyIeCuEVRSmGRj%2BzdfbNA3FyCUqn4TVxCt%2BZyHTl3f85AFn8n9G9TwxhmVJXk05OOzlz8H71H4V1fbsxo6NgO323FWQcgwAphQPuU7MADZQ0cq6tVi9Jm9CBSMuMPY4WyYrDIbt%2BeIie8C1%2FafhqGZeT89Iu4jL2c%2BOAnBaJjS%2FV%2Ftp1k3sqN4BS3vHIDqXsVJej6etgduEyIkoWhx&X-Amz-Signature=741e43ef23e8f0c229202bf14e7e2f0740387d0ca097b7857a9b17ec0ac08e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
