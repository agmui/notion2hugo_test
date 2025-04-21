---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2RODAG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCgwx5DitbSuFY9vrmKn1KORddHkS3a8OzTJ%2BG%2Buv1QFAIhALvf228hy7mjvx4xeYr%2F46PWDzjPPWUYpCRVRRJgM%2FeDKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOa3F2Z5LXQpTCzJ0q3ANKPrcBEIwQaJoyedYioHGJTWP1AEZqscQp7r148u6mxrrSRwqq%2F5XlXQRErOMpMYfU8bZ25LpaY1mjBlD9kwf4mxg3pC6pkwtJ3A2YB6Uwk8vhzIkVkoQu4Vv%2FP7T05YtXfcpFBqZAe6xXYdS0eDnXfRq%2Bb1lttpC4Hh%2B%2F4CNBcmCjN9RjHstjBRW0vjRZr97e8bwklUQSCF0LmZQILjAanEbBSvs5rxE%2F9sWiLqmJHOBitmHz3FB9q8QZZTlVXkG%2Bbdvoe2cV32W3tYzCzTr6CWbCmwfmAVdCT4ImBa6kvHpXmnpahElTnTQv3wlvOo2Kd5k7E%2B8BCTcdSNXUdFbjHBhrG%2B1Sz2HZnoHKl0vrjyyfA7FbnGBiJq77Ai3GVSpsf%2Fyi7%2BMyIaze%2BbIeFTNal7aIPk6omWQy2iHuwZ%2FFht%2Fzg%2FMqdxJGC%2FQm5gIrKYld%2FrryJg9wl9oUuUvTuj5fg%2Bhb6ww4pwNZZi5BU8qAkJiqpNxjFpP%2FRaJZDnU3h81jJERdrH7GguMBj%2FPUgVOiwiIAsJ%2FveZzQ0wHfXhZgQz7AaP5iSd1soIvKKmJnLE4YbFF9VyywbeqnB0wQirIW0Q3tGLXQdrRr4i6Yq8PKu3ZaiRF%2BM0%2FA%2FOGgajDZoZjABjqkAaXrLixoQ%2BKjXKb3tf%2Fe6zdJRkOWRCqVeI9KPfq0nrJ7LgFDjKrDGtSIaySWmk8WcYoFS5TTDExFL6erjEaLWrLvv7uA6EYXANgPQhkkYMzXGyHwjJe%2BiyrTcRyOkmkNp82gaOpXNzco5sLNJmUWzXrW%2F5zmavubP7yPVlVvnKjOEAjOO84OvftdhOkl7WkxcB0ELkmFpmF%2BhIeyGo10otlaphJW&X-Amz-Signature=b88cde11c009284bbf091361199369863eb75a0afc90bdb6e7f113b3c2615c66&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2RODAG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCgwx5DitbSuFY9vrmKn1KORddHkS3a8OzTJ%2BG%2Buv1QFAIhALvf228hy7mjvx4xeYr%2F46PWDzjPPWUYpCRVRRJgM%2FeDKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOa3F2Z5LXQpTCzJ0q3ANKPrcBEIwQaJoyedYioHGJTWP1AEZqscQp7r148u6mxrrSRwqq%2F5XlXQRErOMpMYfU8bZ25LpaY1mjBlD9kwf4mxg3pC6pkwtJ3A2YB6Uwk8vhzIkVkoQu4Vv%2FP7T05YtXfcpFBqZAe6xXYdS0eDnXfRq%2Bb1lttpC4Hh%2B%2F4CNBcmCjN9RjHstjBRW0vjRZr97e8bwklUQSCF0LmZQILjAanEbBSvs5rxE%2F9sWiLqmJHOBitmHz3FB9q8QZZTlVXkG%2Bbdvoe2cV32W3tYzCzTr6CWbCmwfmAVdCT4ImBa6kvHpXmnpahElTnTQv3wlvOo2Kd5k7E%2B8BCTcdSNXUdFbjHBhrG%2B1Sz2HZnoHKl0vrjyyfA7FbnGBiJq77Ai3GVSpsf%2Fyi7%2BMyIaze%2BbIeFTNal7aIPk6omWQy2iHuwZ%2FFht%2Fzg%2FMqdxJGC%2FQm5gIrKYld%2FrryJg9wl9oUuUvTuj5fg%2Bhb6ww4pwNZZi5BU8qAkJiqpNxjFpP%2FRaJZDnU3h81jJERdrH7GguMBj%2FPUgVOiwiIAsJ%2FveZzQ0wHfXhZgQz7AaP5iSd1soIvKKmJnLE4YbFF9VyywbeqnB0wQirIW0Q3tGLXQdrRr4i6Yq8PKu3ZaiRF%2BM0%2FA%2FOGgajDZoZjABjqkAaXrLixoQ%2BKjXKb3tf%2Fe6zdJRkOWRCqVeI9KPfq0nrJ7LgFDjKrDGtSIaySWmk8WcYoFS5TTDExFL6erjEaLWrLvv7uA6EYXANgPQhkkYMzXGyHwjJe%2BiyrTcRyOkmkNp82gaOpXNzco5sLNJmUWzXrW%2F5zmavubP7yPVlVvnKjOEAjOO84OvftdhOkl7WkxcB0ELkmFpmF%2BhIeyGo10otlaphJW&X-Amz-Signature=6694142c7f65077596fd2a71609f9259ad34282abbed75afa098229e297c880a&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
