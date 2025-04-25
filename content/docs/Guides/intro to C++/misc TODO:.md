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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJCDCI3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnm%2B7beVh3VOela6GLEHI%2Fk5K5otUeQIFsFEAmyX%2BSwAiEApTFqEo11SHLcNmNXL1%2B3hVlWY9cQtBrLDL%2BvgKxt6Pgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDN1J%2FmDDOROoKSeVASrcA%2Fb69ksFVrAoxeh1fFn%2Flg0bpWuDWa6tHqutMsdtG27099jsD7qFJLuf1wz9ZKIh07uLfWGBU5TbfLuFMeqQkOzLPJpusxJAYF%2FXpvKo9rLdb%2FsFV7%2BxkcTTUR5CRK6MdQXKIcwcq6dQEY2FfbHfUahqbx5qylXCWVWQyy7faVcg0478a4%2F4A4XrZj7fzYgrH4Tr4O1izYMOf4fuI3INqymqb1Kj2m%2FwamWX5ACWsQIv5QhMujUA1sAX43YO6BSq2eI3sr5LydnxYF%2B45YIHfzuzretxX1Va5VmOSsThgv%2FZ7xzGZiroyQjetiJlUEPIEtPADP1hBgaICLNEG50yccc3S%2BwgiZJZZ8ug5A2C3uvaI5mr7Sf%2Fsl2HkGa9cihW8f4Hgf4T9lKrH4VKLemA0mG8fRohtAqZWYNagCn%2FmPZeqb3g7UA7G%2BeUl%2BMjJeaYD2fmVOueiHwKCW4Wr1rd5EYAT6fFhjNdLQK%2FfQo41mj2G4eo%2FluZHIrCfhcZuGQiZLQ9tqWnQqIoVJyN9TUKSy8sfYjX3FYbrcVzv5kFc9Sa2qXibMVltVnwj7U2FYeuQ6ofytnHf5iFhC7m2alW%2B8rz2d7UcbKcAyyxpwjkcRq3xJEFC8C99MzvXIuqMOazrsAGOqUB1a%2F2Q9SbyEWZO15g%2BfReMK8kMGuL56PopdlqpZApHXf4Y4KJLa5j%2B%2FpqliXRLt4i%2FTcJ6Gj0l98NhQCsznECUMDhsQ2Ak6x%2FDRaiuWgov2L5JKlXIfGJaOUm7YLYfNQDBPy2uo%2BlGGPPKCUjOkUAHHsqrWqrx%2FGRIAUjUqdDx79LHpzAqFoIO%2B1nXVHPxFARrAPdxjhvVRvdQkoKaW9tRYconzA8&X-Amz-Signature=165d6385449a03fa4f7cc5b3c2d3d3386d1eff9fd24435f0d51cbbb00278c55e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJCDCI3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnm%2B7beVh3VOela6GLEHI%2Fk5K5otUeQIFsFEAmyX%2BSwAiEApTFqEo11SHLcNmNXL1%2B3hVlWY9cQtBrLDL%2BvgKxt6Pgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDN1J%2FmDDOROoKSeVASrcA%2Fb69ksFVrAoxeh1fFn%2Flg0bpWuDWa6tHqutMsdtG27099jsD7qFJLuf1wz9ZKIh07uLfWGBU5TbfLuFMeqQkOzLPJpusxJAYF%2FXpvKo9rLdb%2FsFV7%2BxkcTTUR5CRK6MdQXKIcwcq6dQEY2FfbHfUahqbx5qylXCWVWQyy7faVcg0478a4%2F4A4XrZj7fzYgrH4Tr4O1izYMOf4fuI3INqymqb1Kj2m%2FwamWX5ACWsQIv5QhMujUA1sAX43YO6BSq2eI3sr5LydnxYF%2B45YIHfzuzretxX1Va5VmOSsThgv%2FZ7xzGZiroyQjetiJlUEPIEtPADP1hBgaICLNEG50yccc3S%2BwgiZJZZ8ug5A2C3uvaI5mr7Sf%2Fsl2HkGa9cihW8f4Hgf4T9lKrH4VKLemA0mG8fRohtAqZWYNagCn%2FmPZeqb3g7UA7G%2BeUl%2BMjJeaYD2fmVOueiHwKCW4Wr1rd5EYAT6fFhjNdLQK%2FfQo41mj2G4eo%2FluZHIrCfhcZuGQiZLQ9tqWnQqIoVJyN9TUKSy8sfYjX3FYbrcVzv5kFc9Sa2qXibMVltVnwj7U2FYeuQ6ofytnHf5iFhC7m2alW%2B8rz2d7UcbKcAyyxpwjkcRq3xJEFC8C99MzvXIuqMOazrsAGOqUB1a%2F2Q9SbyEWZO15g%2BfReMK8kMGuL56PopdlqpZApHXf4Y4KJLa5j%2B%2FpqliXRLt4i%2FTcJ6Gj0l98NhQCsznECUMDhsQ2Ak6x%2FDRaiuWgov2L5JKlXIfGJaOUm7YLYfNQDBPy2uo%2BlGGPPKCUjOkUAHHsqrWqrx%2FGRIAUjUqdDx79LHpzAqFoIO%2B1nXVHPxFARrAPdxjhvVRvdQkoKaW9tRYconzA8&X-Amz-Signature=6e4b8b9fa9a1aa04329962cf0828cd53c855d60b944e9add0671fb756a41b25e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
