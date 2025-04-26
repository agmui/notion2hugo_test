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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDZS34BL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJTaGZYaEzutjde8wdeQpe%2FrqGPf%2FAQqyQ8LqF4qFy1AIhAPJ%2F0NcjX8oQF12UJgDeFpco7QhE1j7yadfegz0gWm4yKv8DCEAQABoMNjM3NDIzMTgzODA1IgyI6GsBiKk2F0WhaN4q3AOzQb1Yiujn8agc%2BfnWUKQQVwvEJ%2FAN7UqyhmM771O1QluYybYIkBXnsddDHRY8Fp5pMe5VR2AbcOeUlJcpgQgYrAQvkFhk2wI77ctqDkFu2FF964ynsUY4vHtxYCCWdv8OK9mAd8YEf9jppvAGoMPvewpJe9giFMleMYRti5g4gAGhgPpjx42DZYg7cmIt7yu%2F53X2nj0ttWiz%2FHskvZmQ91MBcz8T0SnXLShWsvhxJ4eW5dfPCBh7QDckUZZi%2F1ALRGErJChaRk227KijWTHWSTk4X9BsYLCExO5tdKyzRmD1dzQXESa%2BWM7JrgkR2AxjUolFsKAmiT74LHmkdG%2FlUxg8T3OIwDQyA%2F%2F9ousMaa4Yvfp5R2peeDeFBkI9zX84wlXF%2BxNvXoIHIq0ZR%2FQCuQ%2BAVbFUSlj%2BLGUMGAfrCa9igCUXZnFo%2FowJHViDtMwozDFC4CPYhPzDwmE01g%2Fz959oTSqRltVfLqxYQc3PhLqyu92aB2n%2BOU9ZJVEVD91mIA3GR79xZFo8peEaMgVJtudA0X7algcsud6YqZgp9lBsxcSjFqUq%2B8q6rja7zGM2R6OcK6YPtkK%2BQS9VueaihVUfkMKaYCqvS9vOwyxvd4eK6YkcxCjOsLy%2FpDC0hLLABjqkAdsS5lMAdZKNcgJoTJO6qYqa6GInrWsv1%2FQPkZ%2FKFyiTFw3oYT2lDLMPZyOrf%2BU4P0D6jOJcvGMm8ml5DivsnXc13r%2BsQDg1z8smXZ%2Bho8Y%2BohTE3M62isEWlg2DTMI9o2KNvDj9uNpC%2B812w%2Fa0RXs0FyZPR%2BjfwZw96DSUR0PCAvOkusrxl0i%2BvmnoZTVLfApU0BChl0KyYYVqYChCS6hukTNS&X-Amz-Signature=54fca37fbfa1a024a7fd5bc29b4cca7f62e9c66f37c20c1f9e86a99e96f79560&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
