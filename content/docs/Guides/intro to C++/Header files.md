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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIL7XLCJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGoidW83DCWuJAARQrkspxkOVgRhCsMgpTZknB4yUxk5AiEApmLam4bp6gfcRcsGAVQ2Bq%2BgAS2mvDDYkbBEuzCl6KwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrQSZvG21HP1FHKDCrcA%2B%2BrKx73iNua9saILo4OtP4n17UwuoTc2owbdLbNyuiSxTzZq%2FCihAL%2BEcY7m7eZr%2FB7HTXAwiNhsx6%2BekncR8aXn6wOM0UR7OSJinblOaZKh5gA0ReV40qeTSuJgGzTpORYO41tCts8BsEU4DKkvIDZBciFdoFlw9c6%2B0pzILRTJnjwKqSLOwj646VUIiPO8M%2FM%2BLy%2FDDntNGrYHNxp%2FA0H0vP351OCRydNHmqpJ7BpsfDbJ0pJD%2BDMIHAfB%2Bxib7wZvSyv%2FuJ2BASb4DrOJVPN3r0U2TMFCv1bd9NhfZgxMgdb%2Fr8dnNlswVVePVqUAKnCDVLJCfbexLbKouDUukOEyyhZLyENG4aBDkJvhbExOYpRIsWYKWyRHyzslY419s8olw6VLSUjcHhnJIJp3Fx0bwZ4W1kknuZcvzu8W9WQxS5tdFXEFdo2cywnwLh1xoRjB5TsNbc3MITgTACrIcnYPltJb6wSmT4sAuaCrtlMwxujG18FRldDcmEnQ3K1DbtJst%2Fq4rh32AphMDtV50uhIOYu4u%2FbzUcfQV68zrBlmR69ws7ymXlaa73zw8SQJd5tdwblN0eUUmXAmV8iQO8V8a64CmKhYsn3nSCNkArBfdBfVSsTZZohuq9DML%2FEwcEGOqUBEHsg2ZsHAcQUt9%2BuY587vVoF69D06n%2FAe8G81AJVzHINYVF9fjUtX7k9hBw3eLw5HmZof%2BIwGIhOqJF4AU6dy2JQ4P3utmDruZUSR09ozOmkNzkovwFQUzSY3FLA4JhH%2BlAyJyiIc5u6fc%2B1sfXJ5bOhEBPiUMoOcvSMarLIOVlu8oHq0WUFVXyw4Hfw%2BTOyuzZy8o1bXBed8dsNNGbiJaWHK1on&X-Amz-Signature=96e6a4f8a4de6d155f04d4c3337afad80fc66fec1811be9ea79b1ee9c3f33112&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
