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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WF3XTC4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBSuxKB4k2%2FfzwTGNYZ49kZSxjgrCWUhmEQ2qB50p2LgIgW8lnXYPwfhagijVRClu9HeHJaxS%2FZuoVvVvwJXVAre8qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcDbtuuZlgljgok2SrcA6Vykr22ZDk9u6sG2No7fA%2BiZa9iQDoK%2BagEHKRpioiewnFv45QN7jdg8Gal7oSODqFQizeK1Ztnm9I6O6diE8L8M3z2T63XdRW7k7xL8lAGlHVkqdFUQjfNvvW2S1YXw1WimcXOihKwxYripKdu8fF1t080JM8B%2BthGwvHq6UpLqviHmU%2BRvFmETgkryibZ7TFe8R7ewvzCa0%2BT1qKb%2BZJQreWpxGU%2BlkoTcd1rBumEDrzo4UT%2BlrQkOLkaz36onUwRrtM%2FvoPUt46zkfz8o6tHDgZ5p34%2Fixi00WHAFlMmj93Hi7RbepLFSy3v6m0wnZhgzkqpqP0%2BjPczLuuN881EY8R5MVYoaMBvpFup8VkIN%2BQoKd8hSKf%2BhkgDQ7cLKCU63ZhXw9mS4NS1ErhJyS0QsnmMkS72Z7CCxIoAP3EpAXSBmDWd8dpcyNEHlL0hjxULYidV0cVVLf%2FJlllD4tnN2N3HBMVYPOGX6QPon1O1KeeSv0jDp3cuoqKPVA22UHDvvRGj7ajV8EhAxhi443Eo7nF4pCmpPawUddRUUSGemwaW2nOOw0ryjSFB%2FeJaRPfCewu8SuGyNA2ckjgHZj2wBbWpBRY7YYICmx%2Bi4lCT%2BXH4PAppuSRJQk%2FPMJyV%2BrwGOqUB%2BKFiuG9tiscxJcYd5uXXzvTeOZi%2BMVXi5LdzBBUJuPOB4FUSiH06JTkZ842VATASLo8vPC4E4cfASCe1DFj5baPV9OXxqJdKG5EuiCNRTUCMuWV%2B5ejVmXk4IudqBul7YhiuMsXfxaP7YA9DPJ38%2BGnQuBHCHMWFU8btzfMi%2BqgfOl8zIkCZCI8xgrqEuJE5h2uqfz4O7YeNGp9nVYFH7WhDD5Nl&X-Amz-Signature=d0d71b5451e272056ef5fa4b896b627cd7bfe8bbfcd24f568c448a9a9eef5672&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WF3XTC4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBSuxKB4k2%2FfzwTGNYZ49kZSxjgrCWUhmEQ2qB50p2LgIgW8lnXYPwfhagijVRClu9HeHJaxS%2FZuoVvVvwJXVAre8qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcDbtuuZlgljgok2SrcA6Vykr22ZDk9u6sG2No7fA%2BiZa9iQDoK%2BagEHKRpioiewnFv45QN7jdg8Gal7oSODqFQizeK1Ztnm9I6O6diE8L8M3z2T63XdRW7k7xL8lAGlHVkqdFUQjfNvvW2S1YXw1WimcXOihKwxYripKdu8fF1t080JM8B%2BthGwvHq6UpLqviHmU%2BRvFmETgkryibZ7TFe8R7ewvzCa0%2BT1qKb%2BZJQreWpxGU%2BlkoTcd1rBumEDrzo4UT%2BlrQkOLkaz36onUwRrtM%2FvoPUt46zkfz8o6tHDgZ5p34%2Fixi00WHAFlMmj93Hi7RbepLFSy3v6m0wnZhgzkqpqP0%2BjPczLuuN881EY8R5MVYoaMBvpFup8VkIN%2BQoKd8hSKf%2BhkgDQ7cLKCU63ZhXw9mS4NS1ErhJyS0QsnmMkS72Z7CCxIoAP3EpAXSBmDWd8dpcyNEHlL0hjxULYidV0cVVLf%2FJlllD4tnN2N3HBMVYPOGX6QPon1O1KeeSv0jDp3cuoqKPVA22UHDvvRGj7ajV8EhAxhi443Eo7nF4pCmpPawUddRUUSGemwaW2nOOw0ryjSFB%2FeJaRPfCewu8SuGyNA2ckjgHZj2wBbWpBRY7YYICmx%2Bi4lCT%2BXH4PAppuSRJQk%2FPMJyV%2BrwGOqUB%2BKFiuG9tiscxJcYd5uXXzvTeOZi%2BMVXi5LdzBBUJuPOB4FUSiH06JTkZ842VATASLo8vPC4E4cfASCe1DFj5baPV9OXxqJdKG5EuiCNRTUCMuWV%2B5ejVmXk4IudqBul7YhiuMsXfxaP7YA9DPJ38%2BGnQuBHCHMWFU8btzfMi%2BqgfOl8zIkCZCI8xgrqEuJE5h2uqfz4O7YeNGp9nVYFH7WhDD5Nl&X-Amz-Signature=aaaee825f03fc80486a9ca2eb7dba600b78302d443697c7026535c1bbc82a35c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
