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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672CNHQHT%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6eK%2BYrVo9E0PysPqjHBSeEsQ5UgaxMUjEdcFc%2F28NTgIhANFeL1W4Yhiz1uaiA3%2FoKHekCdSrowdi8eiBzPY1Z93GKv8DCGIQABoMNjM3NDIzMTgzODA1IgyKIUkMapnZK8Nr1FQq3AOgparcmNc8IO9Gb2VKQmlHxXuirYNltIvVs5Guqbh9Qz%2FxAwTHP%2BnujH9b3u98WygPfl%2Fqq9wC7%2FjW7Qrw8xTP6%2FwI27Fl7lL0dRqQOkc6EIrvlT4bo6XlUVFg2nQFZPzdGKDZk6LthU7LHH7q5kHEY3zA0ss32H18vcw1QceR2it9Ux2Nx9Pe%2B%2F%2FUe3R6%2BysOcIJBcoehj0eN8OmGbO0ETBTN7a0NnSnYM0SuDvrQVlKsmvy5FNziXdVmvOc46BMc6uY0%2BslmOIxQBlYUnGkg2Z1C5NFLZ%2BvrHnzXpKJoM4D86Y%2FKqm3QnZLf24VceDuTH65BwagK9rUZjKn%2BmVs5Ip93mN5Wt5s67f%2BBVlAZaAOrYL6%2BdipjLcXlvdyOr3X67nYpSGA%2FtLl8B55G7swvs9Yazp4whJH9w44aQrX9PHZSFNSc3HHmqPLisR7uPSNUEjYYIiBlCUN2qNqhKcrrUFDjZdhNvoKdK6B7Qlor8qTv%2BwMQqwbRAgDJ6FiPMzbJhMIOhgf10TUwhvXyAY584%2FLpG98adCDeAxeTjHrIZMQhiJN4vERO47OIaVGJIQsVCynHYkGGS3e352%2FHdK7%2BDyPGhm2brxyNDiKTF7TfNEqz6fu7JVTWiDywrjCw5rzKBjqkAcnGLb49QxFZB6%2Be0rKNKs%2FtGDiwff%2BZ9sVzNLC1HCvIlru%2FI2wBFQMMU016dEkdSTpu6F6Ze8WqRsc1ubh5%2BR9VXCcIg7LmE6c6gJ7h7fiAOeq2ZHFcUB8pxbZisQzrNeDoKBYayhxTDFtehJ33ptnGjaFZ35XcsSbnvDeTjKx2Twlybta%2FXF1jzsolwfswZKGTg%2Ff5UcrVO16QjiWIG3zVeqc%2B&X-Amz-Signature=1984ecf3d898533d8c5423a021358b4634bafae92f32cbc2be6838d174fdc6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672CNHQHT%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6eK%2BYrVo9E0PysPqjHBSeEsQ5UgaxMUjEdcFc%2F28NTgIhANFeL1W4Yhiz1uaiA3%2FoKHekCdSrowdi8eiBzPY1Z93GKv8DCGIQABoMNjM3NDIzMTgzODA1IgyKIUkMapnZK8Nr1FQq3AOgparcmNc8IO9Gb2VKQmlHxXuirYNltIvVs5Guqbh9Qz%2FxAwTHP%2BnujH9b3u98WygPfl%2Fqq9wC7%2FjW7Qrw8xTP6%2FwI27Fl7lL0dRqQOkc6EIrvlT4bo6XlUVFg2nQFZPzdGKDZk6LthU7LHH7q5kHEY3zA0ss32H18vcw1QceR2it9Ux2Nx9Pe%2B%2F%2FUe3R6%2BysOcIJBcoehj0eN8OmGbO0ETBTN7a0NnSnYM0SuDvrQVlKsmvy5FNziXdVmvOc46BMc6uY0%2BslmOIxQBlYUnGkg2Z1C5NFLZ%2BvrHnzXpKJoM4D86Y%2FKqm3QnZLf24VceDuTH65BwagK9rUZjKn%2BmVs5Ip93mN5Wt5s67f%2BBVlAZaAOrYL6%2BdipjLcXlvdyOr3X67nYpSGA%2FtLl8B55G7swvs9Yazp4whJH9w44aQrX9PHZSFNSc3HHmqPLisR7uPSNUEjYYIiBlCUN2qNqhKcrrUFDjZdhNvoKdK6B7Qlor8qTv%2BwMQqwbRAgDJ6FiPMzbJhMIOhgf10TUwhvXyAY584%2FLpG98adCDeAxeTjHrIZMQhiJN4vERO47OIaVGJIQsVCynHYkGGS3e352%2FHdK7%2BDyPGhm2brxyNDiKTF7TfNEqz6fu7JVTWiDywrjCw5rzKBjqkAcnGLb49QxFZB6%2Be0rKNKs%2FtGDiwff%2BZ9sVzNLC1HCvIlru%2FI2wBFQMMU016dEkdSTpu6F6Ze8WqRsc1ubh5%2BR9VXCcIg7LmE6c6gJ7h7fiAOeq2ZHFcUB8pxbZisQzrNeDoKBYayhxTDFtehJ33ptnGjaFZ35XcsSbnvDeTjKx2Twlybta%2FXF1jzsolwfswZKGTg%2Ff5UcrVO16QjiWIG3zVeqc%2B&X-Amz-Signature=24a4e2e351babc522886eb2e36e405e31dc890a945be2fdb7c84a570de233866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
